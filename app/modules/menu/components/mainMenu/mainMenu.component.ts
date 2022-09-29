import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@anglr/authentication';
import {TitledDialogService} from '@anglr/common/material';

import {UserSettingsSAComponent} from '../../../../components';
import {createStoreDataServiceFactory} from '../../../../misc/factories';
import {StoreDataService} from '../../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../../misc/interfaces';
import {demoDetailLayout, demoDetailRoute, demoHomeLayout, demoHomeRoute, demoOverviewLayout, demoOverviewRelations, demoOverviewRoute} from '../../../../misc/demo';
import {DynamicRoutesService} from '../../../../services/dynamicRoutes';

/**
 * Component used for displaying application main menu
 */
@Component(
{
    selector: 'main-menu',
    templateUrl: 'mainMenu.component.html',
    providers:
    [
        createStoreDataServiceFactory('DYNAMIC_CONTENT_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent
{
    //######################### constructor #########################
    constructor(private _authSvc: AuthenticationService<any>,
                private _router: Router,
                private _dialog: TitledDialogService,
                private _store: StoreDataService<LayoutRelationsMetadata>,
                private _dynamicRoutes: DynamicRoutesService,)
    {
    }

    //######################### public methods - template bindings #########################

    /**
     * Logs out user
     */
    public async logout()
    {
        this._authSvc
            .logout()
            .subscribe(() =>
            {
                this._router.navigate(['/login']);
            });
    }

    /**
     * Loads demo data
     */
    public async loadDemo(event: MouseEvent): Promise<void>
    {
        event.preventDefault();
        event.stopPropagation();

        let overview = this._store.getData('overview');

        if(!overview)
        {
            overview =
            {
                layout: demoOverviewLayout,
                relations: demoOverviewRelations,
            };
            
            this._store.setData('overview', overview);
        }

        let detail = this._store.getData('detail');

        if(!detail)
        {
            detail =
            {
                layout: demoDetailLayout,
                relations: [],
            };
            
            this._store.setData('detail', detail);
        }

        let home = this._store.getData('home');

        if(!home)
        {
            home =
            {
                layout: demoHomeLayout,
                relations: [],
            };
            
            this._store.setData('home', home);
        }

        const routes = this._dynamicRoutes.routes ?? [];
        const overviewRoute = routes.find(itm => itm.template == 'overview');

        if(!overviewRoute)
        {
            await this._dynamicRoutes.addRoute(demoOverviewRoute);
        }

        const detialRoute = routes.find(itm => itm.template == 'detail');

        if(!detialRoute)
        {
            await this._dynamicRoutes.addRoute(demoDetailRoute);
        }

        const homeRoute = routes.find(itm => itm.template == 'home');

        if(!homeRoute)
        {
            await this._dynamicRoutes.addRoute(demoHomeRoute);
        }

        window.location.reload();
    }

    /**
     * Opens settings dialog
     */
    public openSettings()
    {
        this._dialog.open(UserSettingsSAComponent,
        {
            title: 'user settings',
            maxHeight: '80vh'
        });
    }
}