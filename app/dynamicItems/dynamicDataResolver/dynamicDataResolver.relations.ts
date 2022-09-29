import {SimpleChanges} from '@angular/core';
import {RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {Action1, nameof} from '@jscrpt/common';
import {PromiseObservableOr, resolvePromiseObservableOr} from '@jscrpt/common/rxjs';

import {DynamicDataResolverRelationsMetadataLoader} from './dynamicDataResolver.metadata';
import {DynamicDataResolverRelationsOptions} from './dynamicDataResolver.options';

/**
 * Dynamic data resolver relations component
 */
@RelationsEditorMetadata(DynamicDataResolverRelationsMetadataLoader)
export class DynamicDataResolverRelations<TData = any> implements RelationsComponent<DynamicDataResolverRelationsOptions>
{
    //######################### private properties #########################

    /**
     * Resolve function that resolves result
     */
    private _resolve: Action1<TData|null>|undefined|null;

    //######################### public static properties #########################

    /**
     * Gets relations id
     */
    public static get relationsId(): string
    {
        return 'dynamic-data-resolver';
    }

    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: DynamicDataResolverRelationsOptions|undefined|null;

    //######################### public properties - inputs #########################
    
    /**
     * Data that are used as result of dynamic data resolver
     */
    public data: PromiseObservableOr<TData>|undefined|null = null;

    //######################### public properties #########################

    /**
     * Result of dynamic data resolver
     */
    public result: Promise<TData|null> = new Promise<TData|null>(resolve => this._resolve = resolve);

    //######################### public methods - implementation of RelationsComponent #########################
    
    /**
     * @inheritdoc
     */
    public async ngOnChanges(changes: SimpleChanges): Promise<void>
    {
        if(nameof<DynamicDataResolverRelations>('data') in changes)
        {
            const result = await resolvePromiseObservableOr(this.data);

            this._resolve?.(result ?? null);
        }
    }

    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}