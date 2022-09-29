import {DynamicMetadataLoader} from '@anglr/dynamic';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

/**
 * Dynamic data resolver relations metadata loader
 */
export const DynamicDataResolverRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/dynamicDataResolver.relationsMetadata')).DynamicDataResolverRelationsEditorMetadata();
