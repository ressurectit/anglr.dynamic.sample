import {Injectable, Injector} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {provideRelations, RelationsComponentManager, RelationsManager, RelationsProcessor} from '@anglr/dynamic/relations';
import {provideTinyMceRelations} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsRelations} from '@anglr/dynamic/handlebars-components';
import {provideRestRelations} from '@anglr/dynamic/rest-components';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {Observable} from 'rxjs';

import {createStoreDataServiceFactory} from '../../factories';
import {provideSampleRelations} from '../../../dynamicItems/utils';
import DynamicDataResolverRelations from '../../../dynamicItems/dynamicDataResolver/type';
import {StoreDataService} from '../../../services/storeData';
import {DynamicRouteData} from '../../../services/dynamicRoutes';

/**
 * Resolve definition data type
 */
export interface DynamicDataResolve
{
    /**
     * Data obtained by resolver
     */
    data?: DynamicDataRouteData;
}

/**
 * Data obtained by resolver
 */
export interface DynamicDataRouteData<TData = any>
{
    /**
     * Data to be returned
     */
    data?: TData;
}

/**
 * Dynamic data data resolver that uses relations
 */
@Injectable()
export class DynamicDataDataResolver<TData = any> implements Resolve<DynamicDataRouteData<TData>>
{
    //######################### private fields #########################

    /**
     * Instance of injector
     */
    private _injector: Injector;

    //######################### constructor #########################
    constructor(injector: Injector,)
    {
        this._injector = Injector.create(
        {
            providers:
            [
                createStoreDataServiceFactory('RESOLVER_RELATIONS_DATA'),
                provideRelations(),
                provideHandlebarsRelations(),
                provideRestRelations(),
                provideTinyMceRelations(),
                provideSampleRelations(),
            ],
            parent: injector,
        });
    }

    //######################### implementation of Resolve<PrehladHospCookieData> #########################

    /**
     * Resolves data for DynamicData
     * @param route - Next route that will be resolved
     * @param _ - Current state of router
     */
    public resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<DynamicDataRouteData>
    {
        const processor = this._injector.get(RelationsProcessor);
        const manager = this._injector.get(RelationsComponentManager);
        const relations = this._injector.get(RelationsManager);
        const store = this._injector.get(StoreDataService<RelationsNodeMetadata[]>);
        const dataResolverRelations = new DynamicDataResolverRelations();
        const data = route.data as DynamicRouteData;

        if(data.resolverRelations)
        {
            relations.setRelations(store.getData(data.resolverRelations) ?? []);
        }

        return new Observable(subscriber =>
        {
            (async () =>
            {
                manager.registerComponent(DynamicDataResolverRelations.relationsId, dataResolverRelations);
                await processor.initialized;
                processor.updateRelations(DynamicDataResolverRelations.relationsId);

                const result = await dataResolverRelations.result;
                
                subscriber.next({data: result});
                subscriber.complete();
            })();
        });
    }
}