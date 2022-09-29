import {DynamicMetadataLoader} from '@anglr/dynamic';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

/**
 * Activated route snapshot relations metadata loader
 */
export const ActivatedRouteSnapshotRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/activatedRouteSnapshot.relationsMetadata')).ActivatedRouteSnapshotRelationsEditorMetadata();
