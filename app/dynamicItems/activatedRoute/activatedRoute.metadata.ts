import {DynamicMetadataLoader} from '@anglr/dynamic';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

/**
 * Activated route relations metadata loader
 */
export const ActivatedRouteRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/activatedRoute.relationsMetadata')).ActivatedRouteRelationsEditorMetadata();
