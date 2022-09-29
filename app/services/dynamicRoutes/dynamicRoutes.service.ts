import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PERMANENT_STORAGE, PermanentStorage} from '@anglr/common';
import {PromiseOr} from '@jscrpt/common';

import {DynamicRoute, DynamicRouteData} from './dynamicRoutes.interface';
import {DynamicContentSAComponent} from '../../components';
import {DynamicAuthGuard} from '../../misc/guards';
import {DynamicDataDataResolver} from '../../misc/resolvers';

const DYNAMIC_ROUTES = 'DYNAMIC_ROUTES';

/**
 * Service used for handling dynamic routes
 */
@Injectable({providedIn: 'root'})
export class DynamicRoutesService
{
    //######################### private fields #########################

    /**
     * Current routes value
     */
    private _routes: DynamicRoute[] = [];

    //######################### public properties #########################

    /**
     * Gets current routes
     */
    public get routes(): DynamicRoute[]
    {
        return this._routes;
    }

    //######################### constructor #########################
    constructor(@Inject(PERMANENT_STORAGE) private _permanentStorage: PermanentStorage,
                private _router: Router,)
    {
    }

    //######################### public methods #########################

    /**
     * Initializes dynamic routes
     */
    public initialize(): PromiseOr<void>
    {
        this._routes = this._permanentStorage.get<DynamicRoute[]>(DYNAMIC_ROUTES) ?? [];
        this._setRoutes();
    }

    /**
     * Adds new dynamic route
     * @param route - Route to be added into list of dynamic routes
     */
    public async addRoute(route: DynamicRoute): Promise<void>
    {
        this._routes.push(route);

        await this.save();
    }

    /**
     * Saves routes, indicating some change in routes
     */
    public save(): PromiseOr<void>
    {
        this._permanentStorage.set(DYNAMIC_ROUTES, this._routes);
        this._setRoutes();
    }

    /**
     * Removes dynamic route
     * @param route - Route to be removed
     */
    public async remove(route: DynamicRoute): Promise<void>
    {
        const index = this._routes.findIndex(itm => itm.module === route.module &&
                                                    itm.path === route.path &&
                                                    itm.permission === route.permission &&
                                                    itm.resolverRelations === route.resolverRelations &&
                                                    itm.template === route.template &&
                                                    itm.withResolver === route.withResolver);

        if(index < 0)
        {
            return;
        }

        this._routes.splice(index, 1);
        await this.save();
    }

    //######################### private methods #########################

    /**
     * Sets dynamic routes to router
     */
    private _setRoutes(): void
    {
        const currentConfig = this._router.config;

        //prepare routes
        for(const dynamicRoute of this._routes)
        {
            let dynamicModuleRoute = currentConfig.find(itm => itm.path == dynamicRoute.module && Array.isArray(itm.children));

            if(!dynamicModuleRoute)
            {
                dynamicModuleRoute =
                {
                    path: dynamicRoute.module,
                };

                currentConfig.unshift(dynamicModuleRoute);
            }

            dynamicModuleRoute.children = [];
        }

        //fill routes
        for(const dynamicRoute of this._routes)
        {
            const dynamicModuleRoute = currentConfig.find(itm => itm.path == dynamicRoute.module && Array.isArray(itm.children));

            if(!dynamicModuleRoute)
            {
                //TODO: log missing

                continue;
            }

            dynamicModuleRoute.children?.push(
            {
                path: dynamicRoute.path,
                component: DynamicContentSAComponent,
                data: <DynamicRouteData>
                {
                    template: dynamicRoute.template,
                    permission: dynamicRoute.permission,
                    resolverRelations: dynamicRoute.resolverRelations,
                },
                canActivate:
                [
                    ...(!dynamicRoute.permission) ? [] : [DynamicAuthGuard]
                ],
                providers: 
                [
                    ...dynamicRoute.withResolver ? [DynamicDataDataResolver] : [],
                ],
                resolve:
                {
                    ...dynamicRoute.withResolver ? {data: DynamicDataDataResolver} : {}
                }
            });
        }

        this._router.resetConfig(currentConfig);
    }
}