// Copyright (C) myl7
// SPDX-License-Identifier: Apache-2.0
import { visit } from 'unist-util-visit';
import { handleNode as handleNodeWithLegacyTitle } from './legacyTitle.js';
import {
  nameFilter,
  classNameMap,
  defaultConfig,
  defaultConfigForLegacyTitle,
} from './config.js';
export { defaultConfig, defaultConfigForLegacyTitle };
export { mkdocsConfig as mkdocsConfigForLegacyTitle } from './legacyTitle.js';
const plugin = function (...params) {
  // Merge with later one overriding previous one
  const providedConfig = params.reduce((a, b) => ({ ...a, ...b }), {});
  const legacyTitle = providedConfig?.legacyTitle ?? defaultConfig.legacyTitle;
  return (tree) => {
    visit(
      tree,
      legacyTitle
        ? handleNodeWithLegacyTitle({
            ...defaultConfigForLegacyTitle,
            ...providedConfig,
          })
        : handleNode({ ...defaultConfig, ...providedConfig })
    );
  };
};
export default plugin;
const handleNode = (config) => (node) => {
  // Filter required elems
  if (node.type != 'blockquote') return;
  const blockquote = node;
  if (blockquote.children[0]?.type != 'paragraph') return;
  const paragraph = blockquote.children[0];
  if (paragraph.children[0]?.type != 'text') return;
  const text = paragraph.children[0];
  let title;
  // A link break after the title is explicitly required by GitHub
  const titleEnd = text.value.indexOf('\n');
  if (titleEnd < 0) {
    // But if the following one is a block, the newline would be trimmed by the upstream.
    // To start a new block, a newline is required.
    // So we just need to addtionally check if the following one is a block.
    // The legacy title variant is not affected since it checks an inline and does not care about the newline.
    // No addtional inlines can exist in this paragraph for the title...
    if (paragraph.children.length > 1) {
      // Unless it is an inline break, which can be transformed to from 2 spaces with a newline.
      if (paragraph.children.at(1)?.type == 'break') {
        // When it is, we actually have already found the line break required by GitHub.
        // So we just strip the additional `<br>` element.
        // The title element will be removed later.
        paragraph.children.splice(1, 1);
      } else {
        return;
      }
    }
    // Considering the reason why the paragraph ends here, the following one should be a children of the blockquote, which means it is always a block.
    // So no more check is required.
    title = text.value;
    if (!nameFilter(config.titleFilter)(title)) return;
    // Remove the text as the title
    paragraph.children.shift();
  } else {
    const textBody = text.value.substring(titleEnd + 1);
    title = text.value.substring(0, titleEnd);
    // Handle whitespaces after the title.
    // Whitespace characters are defined by GFM.
    const m = /[ \t\v\f\r]+$/.exec(title);
    if (m && !config.titleKeepTrailingWhitespaces) {
      title = title.substring(0, title.length - m[0].length);
    }
    if (!nameFilter(config.titleFilter)(title)) return;
    // Update the text body to remove the title
    text.value = textBody;
  }
  const { displayTitle, checkedTitle } = config.titleTextMap(title);
  // Insert the title element and add classes for the title
  const paragraphTitleText = { type: 'text', value: displayTitle };
  const paragraphTitle = {
    type: 'paragraph',
    children: [paragraphTitleText],
    data: config.dataMaps.title({
      hProperties: {
        className: classNameMap(config.classNameMaps.title)(checkedTitle),
      },
    }),
  };
  blockquote.children.unshift(paragraphTitle);
  // Add classes for the block
  blockquote.data = config.dataMaps.block({
    ...blockquote.data,
    hProperties: {
      className: classNameMap(config.classNameMaps.block)(checkedTitle),
    },
    // The blockquote should be rendered as a div, which is explicitly required by GitHub
    hName: 'div',
  });
};
export const mkdocsConfig = {
  classNameMaps: {
    block: (title) => [
      'admonition',
      ...(title.startsWith('admonition: ')
        ? title.substring('admonition: '.length)
        : title
      ).split(' '),
    ],
    title: 'admonition-title',
  },
  titleFilter: (title) =>
    (title.startsWith('[!admonition: ') && title.endsWith(']')) ||
    (Boolean(
      title.match(
        /^\[!(attention|caution|danger|error|hint|important|note|tip|warning)/
      )
    ) &&
      title.endsWith(']')),
  titleTextMap: (title) => {
    title = title.substring(2, title.length - 1);
    // ' "' will not occur in classes
    const i = title.indexOf(' "');
    const displayTitle =
      i >= 0
        ? title.substring(i + 2, title.length - 1) // Display title is wrapped with ""
        : '';
    const checkedTitle = title.substring(0, i);
    return { displayTitle, checkedTitle };
  },
};
