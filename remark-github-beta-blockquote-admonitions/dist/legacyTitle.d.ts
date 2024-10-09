import type { BuildVisitor } from 'unist-util-visit';
import { ConfigForLegacyTitle as Config } from './config.js';
export declare const handleNode: (config: Config) => BuildVisitor;
export declare const mkdocsConfig: Partial<Config>;
