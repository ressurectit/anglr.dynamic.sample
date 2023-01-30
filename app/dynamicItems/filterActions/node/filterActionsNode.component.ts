import {Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RelationsNode, RelationsNodeBase, RelationNodeOutputSAComponent, RelationsNodeHeaderSAComponent, RelationNodeInputSAComponent} from '@anglr/dynamic/relations-editor';

import {FitlerActionsRelationsOptions} from '../filterActions.options';

/**
 * Relations node component for filter actions
 */
@Component(
{
    selector: 'filter-actions-node',
    templateUrl: 'filterActionsNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
        RelationNodeOutputSAComponent,
        ReactiveFormsModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterActionsNodeSAComponent extends RelationsNodeBase<FitlerActionsRelationsOptions> implements RelationsNode<FitlerActionsRelationsOptions>
{
    //######################### public properties - template bindings #########################

    /**
     * Form control for handling set filter param option
     */
    public setFilterParam: FormControl = new FormControl<boolean>(false);

    //######################### constructor #########################
    constructor(changeDetector: ChangeDetectorRef,
                element: ElementRef<HTMLElement>,)
    {
        super(changeDetector, element);

        this.setFilterParam.valueChanges.subscribe(value =>
        {
            if(this.metadata)
            {
                this.metadata.relationsOptions ??= 
                {
                    setFilterParameter: undefined,
                };

                this.metadata.relationsOptions.setFilterParameter = value;
            }

            this.history.getNewState();
        });
    }

    //######################### protected methods - overrides #########################

    /**
     * @inheritdoc
     */
    protected override metadataSet(): void
    {
        this.setFilterParam.setValue(this.metadata?.relationsOptions?.setFilterParameter ?? false, {emitEvent: false});
    }
}