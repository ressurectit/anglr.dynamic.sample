import {Injector, Input, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DynamicOutput, PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {nameof, serializeToUrlQuery} from '@jscrpt/common';

import {FilterActionsRelationsMetadataLoader} from './filterActions.metadata';
import {FitlerActionsRelationsOptions} from './filterActions.options';

/**
 * Filter actions relations component
 */
@PureRelationsComponent()
@RelationsEditorMetadata(FilterActionsRelationsMetadataLoader)
export class FilterActionsRelations<TFilter = unknown> implements RelationsComponent<FitlerActionsRelationsOptions>
{
    //######################### protected properties #########################

    /**
     * Instance of router used for routing
     */
    protected router: Router;

    /**
     * Instance of current route
     */
    protected route: ActivatedRoute;

    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: FitlerActionsRelationsOptions|undefined|null;

    //######################### public properties - inputs #########################

    /**
     * Allows setting initial value of filter
     */
    @Input()
    public initFilter: TFilter|undefined|null;

    /**
     * Allows setting filter
     */
    @Input()
    public setFilter: TFilter|undefined|null;

    /**
     * Allows reseting filter
     */
    @Input()
    public resetFilter: TFilter|undefined|null;

    //######################### public properties - dynamic outputs #########################

    /**
     * Instance of current filter value
     */
    @DynamicOutput()
    public filter: TFilter|undefined|null;

    //######################### constructor #########################
    constructor(injector: Injector,)
    {
        this.router = injector.get(Router);
        this.route = injector.get(ActivatedRoute);
    }

    //######################### public methods - implementation of OnChanges #########################
    
    /**
     * Called when input value changes
     */
    public async ngOnChanges(changes: SimpleChanges): Promise<void>
    {
        if(nameof<FilterActionsRelations>('resetFilter') in changes)
        {
            if(this.relationsOptions?.setFilterParameter)
            {
                await this.router.navigate(['.', {}],
                                           {
                                               relativeTo: this.route,
                                               queryParamsHandling: 'merge',
                                               replaceUrl: true
                                           });
            }

            this.filter = this.resetFilter;
        }
        
        if(nameof<FilterActionsRelations>('setFilter') in changes)
        {
            if(this.relationsOptions?.setFilterParameter)
            {
                await this.router.navigate(['.', {filter: serializeToUrlQuery(this.setFilter)}],
                                           {
                                               relativeTo: this.route,
                                               queryParamsHandling: 'merge',
                                               replaceUrl: true
                                           });
            }

            this.filter = this.setFilter;
        }

        if(nameof<FilterActionsRelations>('initFilter') in changes)
        {
            this.filter = this.initFilter;
        }
    }

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}