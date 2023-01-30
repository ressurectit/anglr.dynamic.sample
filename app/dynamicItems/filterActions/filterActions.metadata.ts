import {DynamicMetadataLoader} from '@anglr/dynamic';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

/**
 * Filter actions relations metadata loader
 */
export const FilterActionsRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/filterActions.relationsMetadata')).FilterActionsRelationsEditorMetadata();
