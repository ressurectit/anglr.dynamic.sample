import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PERMANENT_STORAGE, PermanentStorage} from '@anglr/common';
import {PromiseOr} from '@jscrpt/common';

import {DynamicRoute, DynamicRouteData} from './dynamicRoutes.interface';
import {DynamicContentSAComponent} from '../../components';

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

    //######################### private methods #########################

    /**
     * Sets dynamic routes to router
     */
    private _setRoutes(): void
    {
        const dynamicContentRoute = this._router.config.find(itm => itm.path == 'dynamicContent');

        if(!dynamicContentRoute)
        {
            return;
        }

        dynamicContentRoute.children = this._routes.map(itm =>
        {
            return {
                path: itm.path,
                component: DynamicContentSAComponent,
                data: <DynamicRouteData>
                {
                    template: itm.template
                },
            };
        });

        this._router.resetConfig(this._router.config);
    }
}