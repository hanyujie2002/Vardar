// Copyright (C) myl7
// SPDX-License-Identifier: Apache-2.0
export const defaultConfig = {
  classNameMaps: {
    block: (title) => `admonition-${title.toLowerCase()}`,
    title: (title) => `admonition-${title.toLowerCase()}-title`,
  },
  titleFilter: [
    '[!NOTE]',
    '[!IMPORTANT]',
    '[!WARNING]',
    '[!TIP]',
    '[!CAUTION]',
  ],
  titleTextMap: (title) => ({
    displayTitle: title.substring(2, title.length - 1),
    checkedTitle: title.substring(2, title.length - 1),
  }),
  dataMaps: {
    block: (data) => data,
    title: (data) => data,
  },
  titleKeepTrailingWhitespaces: false,
  legacyTitle: false,
};
export const defaultConfigForLegacyTitle = {
  ...defaultConfig,
  titleFilter: ['Note', 'Warning'],
  titleTextMap: (title) => ({ displayTitle: title, checkedTitle: title }),
  legacyTitle: false,
  titleLift: false,
  titleLiftWhitespaces: () => '',
  titleUnwrap: false,
};
export function classNameMap(gen) {
  return (title) => {
    const classNames = typeof gen == 'function' ? gen(title) : gen;
    return typeof classNames == 'object' ? classNames.join(' ') : classNames;
  };
}
export function nameFilter(filter) {
  return (title) => {
    return typeof filter == 'function' ? filter(title) : filter.includes(title);
  };
}
