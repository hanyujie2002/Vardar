import type { Data } from 'unist';
export interface Config {
  classNameMaps: {
    block: ClassNameMap;
    title: ClassNameMap;
  };
  titleFilter: NameFilter;
  titleTextMap: (title: string) => {
    displayTitle: string;
    checkedTitle: string;
  };
  dataMaps: {
    block: (data: Data) => Data;
    title: (data: Data) => Data;
  };
  titleKeepTrailingWhitespaces: boolean;
  legacyTitle: boolean;
}
export declare const defaultConfig: Config;
export interface ConfigForLegacyTitle extends Config {
  titleLift: boolean;
  titleLiftWhitespaces: (whitespaces: string) => string;
  titleUnwrap: boolean;
}
export declare const defaultConfigForLegacyTitle: ConfigForLegacyTitle;
type ClassNames = string | string[];
type ClassNameMap = ClassNames | ((title: string) => ClassNames);
export declare function classNameMap(
  gen: ClassNameMap
): (title: string) => string;
type NameFilter = ((title: string) => boolean) | string[];
export declare function nameFilter(
  filter: NameFilter
): (title: string) => boolean;
export {};
