import {Component, ChangeDetectionStrategy, Injector, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {PermanentStorage, PERMANENT_STORAGE} from '@anglr/common';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {AuthenticationService} from '@anglr/authentication';
import {TitledDialogService} from '@anglr/common/material';
import {Dictionary} from '@jscrpt/common';

import {UserSettingsSAComponent} from '../../../../components';
import {createStoreDataServiceFactory} from '../../../../misc/factories';
import {StoreDataService} from '../../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../../misc/interfaces';
import {demoDetailLayout, demoDetailResolverRelations, demoDetailRoute, demoHomeLayout, demoHomeRoute, demoOverviewLayout, demoOverviewRelations, demoOverviewRoute, demoPageCustomComponentLayout, demoPageCustomComponentOptions, demoSampleStylesCustomComponentLayout, demoSampleStylesCustomComponentOptions} from '../../../../misc/demo';
import {DynamicRoutesService} from '../../../../services/dynamicRoutes';
import {DYNAMIC_CONTENT_DATA} from '../../../../misc/constants';
import {CUSTOM_COMPONENTS} from '../../../../services/sampleCustomComponentsRegister';

/**
 * Component used for displaying application main menu
 */
@Component(
{
    selector: 'main-menu',
    templateUrl: 'mainMenu.component.html',
    providers:
    [
        createStoreDataServiceFactory(DYNAMIC_CONTENT_DATA),
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
                private _dynamicRoutes: DynamicRoutesService,
                private _injector: Injector,
                @Inject(PERMANENT_STORAGE) private _permanentStorage: PermanentStorage,)
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

        const customComponents: Dictionary<any> = this._permanentStorage.get(CUSTOM_COMPONENTS) ?? {};
        let sampleStyles = this._store.getData('sample styles');

        if(!sampleStyles)
        {
            sampleStyles =
            {
                layout: demoSampleStylesCustomComponentLayout,
                relations: [],
            };
            
            this._store.setData('sample styles', sampleStyles);
        }

        let page = this._store.getData('page');

        if(!page)
        {
            page =
            {
                layout: demoPageCustomComponentLayout,
                relations: []
            };
            
            this._store.setData('page', page);
        }

        if(!customComponents['sample styles'])
        {
            customComponents['sample styles'] = demoSampleStylesCustomComponentOptions;
        }

        if(!customComponents['page'])
        {
            customComponents['page'] = demoPageCustomComponentOptions;
        }

        this._permanentStorage.set(CUSTOM_COMPONENTS, customComponents);

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

        const resolverRelationsInjector = Injector.create(
        {
            providers:
            [
                createStoreDataServiceFactory('RESOLVER_RELATIONS_DATA'),
            ],
            parent: this._injector,
        });

        const resolverRelationsStore = resolverRelationsInjector.get(StoreDataService<RelationsNodeMetadata[]>);

        if(!resolverRelationsStore.getData('detailResolver'))
        {
            resolverRelationsStore.setData('detailResolver', demoDetailResolverRelations);
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