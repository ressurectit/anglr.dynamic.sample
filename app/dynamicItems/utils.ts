import {Provider} from '@angular/core';
import {provideStaticPackageSource} from '@anglr/dynamic';

import {SAMPLE_LAYOUT_COMPONENTS_PROVIDER, SAMPLE_LAYOUT_MODULE_TYPES_PROVIDER, SAMPLE_RELATIONS_COMPONENTS_PROVIDER, SAMPLE_RELATIONS_MODULE_TYPES_PROVIDER, SAMPLE_RELATIONS_NODES_PROVIDER} from './providers';

/**
 * Providers for layout sample subpackage
 */
export function provideSampleLayout(): Provider[]
{
    return [
        SAMPLE_LAYOUT_COMPONENTS_PROVIDER,
    ];
}

/**
 * Providers for relations sample subpackage
 */
export function provideSampleRelations(): Provider[]
{
    return [
        SAMPLE_RELATIONS_COMPONENTS_PROVIDER,
    ];
}

/**
 * Providers for layout editor sample subpackage
 */
export function provideSampleLayoutEditor(): Provider[]
{
    return [
        SAMPLE_LAYOUT_COMPONENTS_PROVIDER,
        SAMPLE_LAYOUT_MODULE_TYPES_PROVIDER,
        provideStaticPackageSource('sample-components'),
    ];
}

/**
 * Providers for relations editor sample subpackage
 */
export function provideSampleRelationsEditor(): Provider[]
{
    return [
        SAMPLE_RELATIONS_MODULE_TYPES_PROVIDER,
        SAMPLE_RELATIONS_NODES_PROVIDER,
        provideStaticPackageSource('sample-components'),
    ];
}

/**
 * Providers for layout relations editor sample subpackage
 */
export function provideSampleLayoutRelationsEditor(): Provider[]
{
    return [
        ...provideSampleRelationsEditor(),
        ...provideSampleLayout(),
    ];
}


/**
 * Providers for layout relations sample subpackage
 */
export function provideSampleLayoutRelations(): Provider[]
{
    return [
        ...provideSampleLayout(),
        ...provideSampleRelations(),
    ];
}