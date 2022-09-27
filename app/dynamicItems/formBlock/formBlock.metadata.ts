import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

import {FormBlockComponentOptions} from './formBlock.options';

/**
 * Form block layout metadata loader
 */
export const FormBlockLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<FormBlockComponentOptions>> = async () => new (await import('./metadata/formBlock.layoutMetadata')).FormBlockLayoutEditorMetadata();

/**
 * Form block relations metadata loader
 */
export const FormBlockRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/formBlock.relationsMetadata')).FormBlockRelationsEditorMetadata();
