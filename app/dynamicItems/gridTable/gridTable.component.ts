import {Component, ChangeDetectionStrategy, SimpleChanges, ViewChild, AfterViewInit} from '@angular/core';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {HostDisplayBlockStyle} from '@anglr/common';
import {Grid, GridComponent, GridModule, GridOptions, NoPagingComponent, SimpleOrdering, SyncDataLoaderComponent, SyncDataLoaderOptions} from '@anglr/grid';
import {setSyncData} from '@anglr/grid/extensions';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {nameof, PromiseOr} from '@jscrpt/common';

import {GridTableComponentOptions} from './gridTable.options';
import {GridTableLayoutMetadataLoader, GridTableRelationsMetadataLoader} from './gridTable.metadata';

/**
 * Component used for displaying grid table
 */
@Component(
{
    selector: 'grid-table',
    templateUrl: 'gridTable.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        GridModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@RelationsEditorMetadata(GridTableRelationsMetadataLoader)
@LayoutEditorMetadata(GridTableLayoutMetadataLoader)
export class GridTableSAComponent<TData = any> extends LayoutComponentBase<GridTableComponentOptions> implements LayoutComponent<GridTableComponentOptions>, AfterViewInit
{
    //######################### public properties - inputs #########################

    /**
     * Data to be displayed in grid
     */
    public data: TData[] = [];

    //######################### protected properties - template bindings #########################

    /**
     * Instance of grid options
     */
    protected gridOptions: GridOptions =
    {
        plugins:
        {
            dataLoader:
            {
                //use sync data loader as grid data loader plugin
                type: SyncDataLoaderComponent,
                options: <SyncDataLoaderOptions<TData, SimpleOrdering>>
                {
                    //all data used in data loader
                    data: [],
                }
            },
            paging:
            {
                type: NoPagingComponent,
            }
        }
    };

    //######################### protected properties - children #########################

    /**
     * Instance of grid
     */
    @ViewChild(GridComponent)
    protected grid: Grid|undefined|null;

    //######################### public methods - implementation of AfterViewInit #########################
    
    /**
     * Called when view was initialized
     */
    public ngAfterViewInit(): void
    {
        if(this.data.length && this.grid)
        {
            this.grid.execute(setSyncData(this.data, true));
        }
    }

    //######################### protected methods - overrides #########################

    /**
     * @inheritdoc
     */
    protected override onChanges(changes: SimpleChanges): PromiseOr<void>
    {
        if(nameof<GridTableSAComponent>('data') in changes && this.grid)
        {
            this.grid.execute(setSyncData(this.data, true));
        }
    }
}