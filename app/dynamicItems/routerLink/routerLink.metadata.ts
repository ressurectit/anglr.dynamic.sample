import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';
import {RelationsEditorMetadataDescriptor} from '@anglr/dynamic/relations-editor';

import {RouterLinkComponentOptions} from './routerLink.options';

/**
 * Router link layout metadata loader
 */
export const RouterLinkLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<RouterLinkComponentOptions>> = async () => new (await import('./metadata/routerLink.layoutMetadata')).RouterLinkLayoutEditorMetadata();

/**
 * Router link relations metadata loader
 */
export const RouterLinkRelationsMetadataLoader: DynamicMetadataLoader<RelationsEditorMetadataDescriptor> = async () => new (await import('./metadata/routerLink.relationsMetadata')).RouterLinkRelationsEditorMetadata();
