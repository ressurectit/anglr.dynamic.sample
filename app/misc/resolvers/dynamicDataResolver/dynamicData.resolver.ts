import {Injectable, Injector} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {provideRelations, RelationsComponentManager, RelationsManager, RelationsProcessor} from '@anglr/dynamic/relations';
import {provideTinyMceRelations} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsRelations} from '@anglr/dynamic/handlebars-components';
import {provideBasicRelations} from '@anglr/dynamic/basic-components';
import {provideRestRelations} from '@anglr/dynamic/rest-components';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {Observable} from 'rxjs';

import {createStoreDataServiceFactory} from '../../factories';
import {provideSampleRelations} from '../../../dynamicItems/utils';
import ActivatedRouteSnapshotRelations from '../../../dynamicItems/activatedRouteSnapshot/type';
import DynamicDataResolverRelations from '../../../dynamicItems/dynamicDataResolver/type';
import {StoreDataService} from '../../../services/storeData';
import {DynamicRouteData} from '../../../services/dynamicRoutes';

/**
 * Resolve definition data type
 */
export interface DynamicDataResolve<TData = any>
{
    /**
     * Data obtained by resolver
     */
    data?: TData;
}

/**
 * Dynamic data data resolver that uses relations
 */
@Injectable()
export class DynamicDataDataResolver<TData = any> implements Resolve<TData>
{
    //######################### private fields #########################

    /**
     * Instance of injector
     */
    private _injector: Injector;

    /**
     * Instance of relations processor for resolver relations
     */
    private _processor: RelationsProcessor;

    /**
     * Instance of relations component manager for resolver relations
     */
    private _manager: RelationsComponentManager;

    /**
     * Instance of relations manager for resolver relations
     */
    private _relations: RelationsManager;

    /**
     * Instance of store for resolver relations
     */
    private _store: StoreDataService<RelationsNodeMetadata[]>;

    //######################### constructor #########################
    constructor(injector: Injector,)
    {
        this._injector = Injector.create(
        {
            providers:
            [
                createStoreDataServiceFactory('RESOLVER_RELATIONS_DATA'),
                provideRelations(),
                provideBasicRelations(),
                provideHandlebarsRelations(),
                provideRestRelations(),
                provideTinyMceRelations(),
                provideSampleRelations(),
            ],
            parent: injector,
        });

        this._processor = this._injector.get(RelationsProcessor);
        this._manager = this._injector.get(RelationsComponentManager);
        this._relations = this._injector.get(RelationsManager);
        this._store = this._injector.get(StoreDataService<RelationsNodeMetadata[]>);
    }

    //######################### implementation of Resolve<PrehladHospCookieData> #########################

    /**
     * Resolves data for DynamicData
     * @param route - Next route that will be resolved
     * @param _ - Current state of router
     */
    public resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<TData>
    {
        const dataResolverRelations = new DynamicDataResolverRelations();
        const routeSnapshot = new ActivatedRouteSnapshotRelations(route);
        const data = route.data as DynamicRouteData;

        if(data.resolverRelations)
        {
            this._relations.setRelations(this._store.getData(data.resolverRelations) ?? []);
        }

        return new Observable(subscriber =>
        {
            (async () =>
            {
                this._manager.registerComponent(ActivatedRouteSnapshotRelations.relationsId, routeSnapshot);
                this._manager.registerComponent(DynamicDataResolverRelations.relationsId, dataResolverRelations);
                await this._processor.initialized;
                this._processor.updateRelations(ActivatedRouteSnapshotRelations.relationsId);
                this._processor.updateRelations(DynamicDataResolverRelations.relationsId);

                const result = await dataResolverRelations.result;

                this._processor.destroyComponent(DynamicDataResolverRelations.relationsId);
                this._processor.destroyComponent(ActivatedRouteSnapshotRelations.relationsId);
                this._manager.unregisterComponent(DynamicDataResolverRelations.relationsId);
                this._manager.unregisterComponent(ActivatedRouteSnapshotRelations.relationsId);

                subscriber.next(result);
                subscriber.complete();
            })();
        });
    }
}