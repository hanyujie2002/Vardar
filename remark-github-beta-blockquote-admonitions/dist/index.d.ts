import type { Plugin } from 'unified';
import {
  Config,
  ConfigForLegacyTitle,
  defaultConfig,
  defaultConfigForLegacyTitle,
} from './config.js';
export {
  Config,
  ConfigForLegacyTitle,
  defaultConfig,
  defaultConfigForLegacyTitle,
};
export { mkdocsConfig as mkdocsConfigForLegacyTitle } from './legacyTitle.js';
type PluginParameters = (Partial<Config> | Partial<ConfigForLegacyTitle>)[];
declare const plugin: Plugin<PluginParameters>;
export default plugin;
export declare const mkdocsConfig: Partial<Config>;
