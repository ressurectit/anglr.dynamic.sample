import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {Grid, GridOptions, NoPagingComponent, SyncDataLoaderComponent, SyncDataLoaderOptions} from '@anglr/grid';
import {TitledDialogService} from '@anglr/common/material';
import {setSyncData} from '@anglr/grid/extensions';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {NewCustomComponentSAComponent} from '../misc/components';
import {SampleCustomComponentsRegister} from '../../../services/sampleCustomComponentsRegister';
import {createStoreDataServiceFactory} from '../../../misc/factories';
import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {DYNAMIC_CONTENT_DATA} from '../../../misc/constants';

/**
 * Component used for displaying custom components editation
 */
@Component(
{
    selector: 'custom-components-view',
    templateUrl: 'customComponents.component.html',
    providers: 
    [
        SampleCustomComponentsRegister,
        createStoreDataServiceFactory(DYNAMIC_CONTENT_DATA),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'customComponents'})
@Authorize('customComponents-page')
export class CustomComponentsComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Represents options for grid
     */
    protected gridOptions: GridOptions;

    //######################### protected properties - children #########################

    /**
     * Instance of grid
     */
    @ViewChild('grid')
    protected grid: Grid|undefined|null;

    //######################### constructor #########################
    constructor(private _dialogSvc: TitledDialogService,
                private _customComponents: SampleCustomComponentsRegister,
                private _store: StoreDataService<LayoutRelationsMetadata>,)
    {
        this.gridOptions =
        {
            autoInitialize: true,
            plugins:
            {
                dataLoader:
                {
                    type: SyncDataLoaderComponent,
                    options: <SyncDataLoaderOptions>
                    {
                        data: this._customComponents.getRegisteredComponents().map(itm => ({name: itm})),
                    }
                },
                paging:
                {
                    type: NoPagingComponent,
                },
            }
        };
    }

    //######################### protected methods - template bindings #########################

    /**
     * Opens dialog for adding custom component
     */
    protected async addCustomComponent(): Promise<void>
    {
        await lastValueFrom(this._dialogSvc.open(NewCustomComponentSAComponent,
        {
            width: '75vw',
            title: 'new custom component',
        }).afterClosed());

        this.grid?.execute(setSyncData(this._customComponents.getRegisteredComponents().map(itm => ({name: itm})), true));
    }

    /**
     * Removes custom compnent
     * @param name - Name of custom component
     */
    protected removeCustomComponent(name: string): void
    {
        this._customComponents.removeCustomComponent(name);
        this._store.removeData(name);
        
        this.grid?.execute(setSyncData(this._customComponents.getRegisteredComponents().map(itm => ({name: itm})), true));
    }
}