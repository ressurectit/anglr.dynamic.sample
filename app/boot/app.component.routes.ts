import {Routes} from '@angular/router';
import {extractRoutes} from '@anglr/common/router';

import {accessDeniedRoute} from '../pages/accessDenied/accessDenied.route';
import {notFoundRoute} from '../pages/notFound/notFound.route';

export const routes: Routes = 
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
    {
        path: 'admin',
        loadChildren: () => import('../pages/+customComponents/customComponents.module').then(({CustomComponentsModule}) => CustomComponentsModule)
    },
    ...extractRoutes(
    [
    ]),
    accessDeniedRoute,
    notFoundRoute,
];
