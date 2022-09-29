import {Injector} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {DynamicOutput, PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';

import {ActivatedRouteRelationsMetadataLoader} from './activatedRoute.metadata';
import {ActivatedRouteRelationsOptions} from './activatedRoute.options';

/**
 * Activated route relations component
 */
@PureRelationsComponent()
@RelationsEditorMetadata(ActivatedRouteRelationsMetadataLoader)
export class ActivatedRouteRelations implements RelationsComponent<ActivatedRouteRelationsOptions>
{
    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: ActivatedRouteRelationsOptions|undefined|null;

    //######################### public properties - dynamic outputs #########################

    /**
     * The matrix parameters scoped to this route.
     */
    @DynamicOutput()
    public params: Params|undefined|null;

    /**
     * The query parameters shared by all the routes
     */
    @DynamicOutput()    
    public queryParams: Params|undefined|null;

    /**
     * The URL fragment shared by all the routes
     */
    @DynamicOutput()    
    public fragment: string|undefined|null;

    /**
     * The static and resolved data of this route
     */
    @DynamicOutput()    
    public data: Data|undefined|null;

    //######################### constructor #########################
    constructor(injector: Injector,)
    {
        const route = injector.get(ActivatedRoute);

        route.params.subscribe(params => this.params = params);
        route.data.subscribe(data =>
            {
                console.log(data);
                this.data = data;
            } );
    }

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}