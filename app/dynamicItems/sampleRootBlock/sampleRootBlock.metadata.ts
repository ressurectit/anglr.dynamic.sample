import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {SampleRootBlockComponentOptions} from './sampleRootBlock.options';

/**
 * Sample root block layout metadata loader
 */
export const SampleRootBlockLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<SampleRootBlockComponentOptions>> = async () => new (await import('./metadata/sampleRootBlock.layoutMetadata')).SampleRootBlockLayoutEditorMetadata();
