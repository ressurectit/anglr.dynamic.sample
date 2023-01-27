import {ActivatedRouteSnapshot, Data, Params} from '@angular/router';
import {RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {Subject} from 'rxjs';

import {ActivatedRouteSnapshotRelationsMetadataLoader} from './activatedRouteSnapshot.metadata';
import {ActivatedRouteSnapshotRelationsOptions} from './activatedRouteSnapshot.options';

/**
 * Activated route snapshot relations component
 */
@RelationsEditorMetadata(ActivatedRouteSnapshotRelationsMetadataLoader)
export class ActivatedRouteSnapshotRelations implements RelationsComponent<ActivatedRouteSnapshotRelationsOptions>
{
    //######################### public static properties #########################

    /**
     * Gets relations id
     */
    public static get relationsId(): string
    {
        return 'activated-route-snapshot';
    }

    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: ActivatedRouteSnapshotRelationsOptions|undefined|null;

    //######################### public properties - dynamic outputs #########################

    /**
     * Subject for the matrix parameters scoped to this route.
     */
    public paramsChange: Subject<void> = new Subject<void>();

    /**
     * Subject for the query parameters shared by all the routes
     */
    public queryParamsChange: Subject<void> = new Subject<void>();

    /**
     * Subject for the URL fragment shared by all the routes
     */
    public fragmentChange: Subject<void> = new Subject<void>();

    /**
     * Subject for the static and resolved data of this route
     */
    public dataChange: Subject<void> = new Subject<void>();

    /**
     * Indication whether are matrix parameters scoped to this route initialized
     */
    public paramsAssigned: boolean = true;

    /**
     * Indication whether are query parameters shared by all the routes initialized
     */
    public queryParamsAssigned: boolean = true;

    /**
     * Indication whether is URL fragment shared by all the routes initialized
     */
    public fragmentAssigned: boolean = true;

    /**
     * Indication whether is static and resolved data of this route initialized
     */
    public dataAssigned: boolean = true;

    /**
     * The matrix parameters scoped to this route.
     */
    public get params(): Params
    {
        return this._route.params;
    }

    /**
     * The query parameters shared by all the routes
     */
    public get queryParams(): Params
    {
        return this._route.queryParams;
    }

    /**
     * The URL fragment shared by all the routes
     */
    public get fragment(): string|null
    {
        return this._route.fragment;
    }

    /**
     * The static and resolved data of this route
     */
    public get data(): Data
    {
        return this._route.data;
    }

    //######################### constructor #########################
    constructor(private _route: ActivatedRouteSnapshot,)
    {
    }

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}