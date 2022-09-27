import {SimpleChanges} from '@angular/core';
import {PureRelationsComponent, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata, VoidObject} from '@anglr/dynamic/relations-editor';
import {nameof} from '@jscrpt/common';
import {Subject} from 'rxjs';

import {TriggerDataRelationsMetadataLoader} from './triggerData.metadata';
import {TriggerDataRelationsOptions} from './triggerData.options';

/**
 * Trigger data relations component
 */
@PureRelationsComponent()
@RelationsEditorMetadata(TriggerDataRelationsMetadataLoader)
export class TriggerDataRelations<TValue = any> implements RelationsComponent<TriggerDataRelationsOptions>
{
    //######################### protected properties #########################

    /**
     * Subject used for emitting changes in data
     */
    protected dataChange: Subject<void> = new Subject<void>();

    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: TriggerDataRelationsOptions|undefined|null;

    //######################### public properties - inputs #########################
    
    /**
     * Trigger that indicates that data has changed
     */
    public trigger: VoidObject = {};

    //######################### public properties - inputs/dynamic outputs #########################

    /**
     * Data that should be triggered
     */
    public data: TValue|undefined|null;

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public ngOnChanges(changes: SimpleChanges): void
    {
        if(nameof<TriggerDataRelations>('trigger') in changes)
        {
            this.dataChange.next();
        }
    }

    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}