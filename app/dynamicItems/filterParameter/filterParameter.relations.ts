import {Injector} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DynamicOutput, PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {readEncodedFilterWithDates} from '@anglr/common/date-fns';

import {FilterParameterRelationsMetadataLoader} from './filterParameter.metadata';
import {FilterParameterRelationsOptions} from './filterParameter.options';

/**
 * Filter parameter relations component
 */
@PureRelationsComponent()
@RelationsEditorMetadata(FilterParameterRelationsMetadataLoader)
export class FilterParameterRelations<TFilter = unknown> implements RelationsComponent<FilterParameterRelationsOptions>
{
    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: FilterParameterRelationsOptions|undefined|null;

    //######################### public properties - dynamic outputs #########################

    /**
     * Instance of filter obtained from URL
     */
    @DynamicOutput()    
    public filter: TFilter|undefined|null;

    //######################### constructor #########################
    constructor(injector: Injector,)
    {
        const route = injector.get(ActivatedRoute);
        const routeParam = route.snapshot.paramMap.get('filter');

        if(routeParam)
        {
            const filter: TFilter = readEncodedFilterWithDates({}, routeParam) as TFilter;
            this.filter = filter;
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