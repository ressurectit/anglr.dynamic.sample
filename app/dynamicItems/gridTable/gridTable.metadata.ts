import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

import {GridTableComponentOptions} from './gridTable.options';

/**
 * Grid table layout metadata loader
 */
export const GridTableLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<GridTableComponentOptions>> = async () => new (await import('./metadata/gridTable.layoutMetadata')).GridTableLayoutEditorMetadata();

/**
 * Grid table relations metadata loader
 */
export const GridTableRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/gridTable.relationsMetadata')).GridTableRelationsEditorMetadata();
