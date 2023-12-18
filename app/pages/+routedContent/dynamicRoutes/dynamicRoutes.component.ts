import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {Grid, GridOptions, NoPagingSAComponent, SyncDataLoaderSAComponent, SyncDataLoaderOptions} from '@anglr/grid';
import {setSyncData} from '@anglr/grid/extensions';
import {RecursivePartial} from '@jscrpt/common';

import {DynamicRoute, DynamicRoutesService} from '../../../services/dynamicRoutes';

/**
 * Component used for displaying all registered dynamic routes
 */
@Component(
{
    selector: 'dynamic-routes',
    templateUrl: 'dynamicRoutes.component.html',
    // styleUrls: ['dynamicRoutes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'dynamicRoutes'})
@Authorize('dynamicRoutes-page')
export class DynamicRoutesComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Represents options for grid
     */
    protected gridOptions: RecursivePartial<GridOptions>;

    //######################### protected properties - children #########################

    /**
     * Instance of grid
     */
    @ViewChild('grid')
    protected grid: Grid|undefined|null;

    //######################### constructor #########################
    constructor(private _dynamicRoutesSvc: DynamicRoutesService,)
    {
        this.gridOptions =
        {
            autoInitialize: true,
            plugins:
            {
                dataLoader:
                {
                    type: SyncDataLoaderSAComponent,
                    options: <SyncDataLoaderOptions>
                    {
                        data: this._dynamicRoutesSvc.routes,
                    }
                },
                paging:
                {
                    type: NoPagingSAComponent,
                },
            }
        };
    }

    //######################### protected methods - template bindings #########################

    /**
     * Removes dynamic route
     * @param route - Route to be removed
     */
    protected async remove(route: DynamicRoute): Promise<void>
    {
        await this._dynamicRoutesSvc.remove(route);
        this.grid?.execute(setSyncData(this._dynamicRoutesSvc.routes, true));
    }
}