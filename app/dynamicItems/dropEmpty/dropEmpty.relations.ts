import {Input, SimpleChanges} from '@angular/core';
import {DynamicOutput, PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {Dictionary, isBlank, isJsObject, nameof} from '@jscrpt/common';

import {DropEmptyRelationsMetadataLoader} from './dropEmpty.metadata';
import {DropEmptyRelationsOptions} from './dropEmpty.options';

/**
 * Drop empty relations component
 */
@PureRelationsComponent()
@RelationsEditorMetadata(DropEmptyRelationsMetadataLoader)
export class DropEmptyRelations implements RelationsComponent<DropEmptyRelationsOptions>
{
    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: DropEmptyRelationsOptions|undefined|null;

    //######################### public properties - inputs #########################

    /**
     * Input data that are transformed by droping empty properties
     */
    @Input()
    public inputData: unknown|undefined|null;

    //######################### public properties - dynamic outputs #########################

    /**
     * Transformed data cleaned of empty properties
     */
    @DynamicOutput()
    public data: unknown|undefined|null;

    //######################### public methods - implementation of OnChanges #########################
    
    /**
     * Called when input value changes
     */
    public ngOnChanges(changes: SimpleChanges): void
    {
        if(nameof<DropEmptyRelations>('inputData') in changes)
        {
            if(isJsObject(this.inputData))
            {
                const keys = Object.keys(this.inputData);
                const obj = {...this.inputData} as Dictionary;

                for(const key of keys)
                {
                    if(isBlank(obj[key]) || obj[key] === '')
                    {
                        delete obj[key];
                    }
                }

                this.data = obj;
            }
            else
            {
                this.data = this.inputData;
            }
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