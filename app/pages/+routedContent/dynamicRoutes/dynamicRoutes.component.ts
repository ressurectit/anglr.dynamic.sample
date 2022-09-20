import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {GridOptions} from '@anglr/grid';

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
    protected gridOptions: GridOptions;

    //######################### constructor #########################
    constructor()
    {
        this.gridOptions =
        {
            autoInitialize: false,
        };
    }
}