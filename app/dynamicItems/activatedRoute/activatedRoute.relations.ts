import {SimpleChanges} from '@angular/core';
import {DynamicOutput, PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {nameof} from '@jscrpt/common';

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

    //######################### public properties - inputs #########################
    
    /**
     * Condition which value will be negated
     */
    public condition: boolean = false;

    //######################### public properties - dynamic outputs #########################

    /**
     * Negated condition value
     */
    @DynamicOutput()
    public negatedCondition: boolean = true;

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public ngOnChanges(changes: SimpleChanges): void
    {
        if(nameof<ActivatedRouteRelations>('condition') in changes)
        {
            this.negatedCondition = !this.condition;
        }
    }

    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}