import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

import {SubmitButtonComponentOptions} from './submitButton.options';

/**
 * Submit button layout metadata loader
 */
export const SubmitButtonLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<SubmitButtonComponentOptions>> = async () => new (await import('./metadata/submitButton.layoutMetadata')).SubmitButtonLayoutEditorMetadata();

/**
 * Submit button relations metadata loader
 */
export const SubmitButtonRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/submitButton.relationsMetadata')).SubmitButtonRelationsEditorMetadata();
