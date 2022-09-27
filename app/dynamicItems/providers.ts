import {ClassProvider} from '@angular/core';
import {LAYOUT_COMPONENTS_MODULE_PROVIDERS} from '@anglr/dynamic/layout';
import {LAYOUT_MODULE_TYPES_PROVIDERS} from '@anglr/dynamic/layout-editor';
import {RELATIONS_COMPONENTS_MODULE_PROVIDERS} from '@anglr/dynamic/relations';
import {RELATIONS_MODULE_TYPES_PROVIDERS, RELATIONS_NODES_PROVIDERS} from '@anglr/dynamic/relations-editor';

import {SampleDynamicModuleItemsProvider, SampleDynamicModuleRelationsProvider, SampleDynamicModuleTypesProvider} from './services';

/**
 * Provider for sample package layout components provider
 */
export const SAMPLE_LAYOUT_COMPONENTS_PROVIDER: ClassProvider =
{
    provide: LAYOUT_COMPONENTS_MODULE_PROVIDERS,
    useClass: SampleDynamicModuleItemsProvider,
    multi: true
};

/**
 * Provider for sample dynamic layout module types provider
 */
export const SAMPLE_LAYOUT_MODULE_TYPES_PROVIDER: ClassProvider =
{
    provide: LAYOUT_MODULE_TYPES_PROVIDERS,
    useClass: SampleDynamicModuleTypesProvider,
    multi: true
};

/**
 * Provider for sample dynamic relations types provider
 */
export const SAMPLE_RELATIONS_MODULE_TYPES_PROVIDER: ClassProvider =
{
    provide: RELATIONS_MODULE_TYPES_PROVIDERS,
    useClass: SampleDynamicModuleRelationsProvider,
    multi: true
};

/**
 * Provider for sample package relations nodes provider
 */
export const SAMPLE_RELATIONS_NODES_PROVIDER: ClassProvider =
{
    provide: RELATIONS_NODES_PROVIDERS,
    useClass: SampleDynamicModuleItemsProvider,
    multi: true
};

/**
 * Provider for sample package relations components provider
 */
export const SAMPLE_RELATIONS_COMPONENTS_PROVIDER: ClassProvider =
{
    provide: RELATIONS_COMPONENTS_MODULE_PROVIDERS,
    useClass: SampleDynamicModuleItemsProvider,
    multi: true
};