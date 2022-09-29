import {Type} from '@angular/core';
import {ModuleRoutesOptions} from '@anglr/common/router';

import {accessDeniedRoute} from '../pages/accessDenied/accessDenied.route';
import {notFoundRoute} from '../pages/notFound/notFound.route';

export const components: Type<any>[] =
[
];

export const routesOptions: ModuleRoutesOptions =
{
    rootModule: true,
    rootModuleConfig:
    {
        enableTracing: false,
        useHash: true,
        // preloadingStrategy: PreloadAllModules
    },
    staticRoutesBefore:
    [
        {
            path: '',
            loadChildren: () => import('../pages/+default/default.module').then(({DefaultModule}) => DefaultModule)
        },
        {
            path: 'admin',
            loadChildren: () => import('../pages/+routedContent/routedContent.module').then(({RoutedContentModule}) => RoutedContentModule)
        },
        {
            path: 'admin',
            loadChildren: () => import('../pages/+dynamicContent/dynamicContent.module').then(({DynamicContentModule}) => DynamicContentModule)
        },
    ],
    staticRoutesAfter:
    [
        accessDeniedRoute,
        notFoundRoute,
    ]
};