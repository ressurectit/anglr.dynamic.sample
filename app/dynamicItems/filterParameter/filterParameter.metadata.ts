import {DynamicMetadataLoader} from '@anglr/dynamic';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

/**
 * Filter parameter relations metadata loader
 */
export const FilterParameterRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/filterParameter.relationsMetadata')).FilterParameterRelationsEditorMetadata();
