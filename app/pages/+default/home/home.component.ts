import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {ComponentRedirectRoute} from '@anglr/common/router';
import {Authorize, ComponentRouteAuthorized} from '@anglr/authentication';

import {DynamicRoute, DynamicRoutesService} from '../../../services/dynamicRoutes';

/**
 * Home component
 */
@Component(
{
    selector: 'home-view',
    templateUrl: 'home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRedirectRoute('', 'home')
@ComponentRouteAuthorized({path: 'home'})
@Authorize('home-page')
export class HomeComponent implements OnInit
{
    //######################### protected properties - template bindings #########################

    /**
     * Array of available dynamic routes
     */
    protected routes: DynamicRoute[] = [];

    //######################### constructor #########################
    constructor(private _dynamicRoutes: DynamicRoutesService,)
    {
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public ngOnInit(): void
    {
        this.routes = this._dynamicRoutes.routes;
    }
}
