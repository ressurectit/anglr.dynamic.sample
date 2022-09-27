import {Component, ChangeDetectionStrategy, inject, Injector, ValueProvider} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LayoutComponent, LayoutComponentBase, LayoutComponentMetadata, LayoutComponentRendererSADirective} from '@anglr/dynamic/layout';
import {LayoutComponentsIteratorService, LayoutEditorMetadata, LayoutEditorMetadataExtractor} from '@anglr/dynamic/layout-editor';
import {HostDisplayBlockStyle} from '@anglr/common';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {FormComponentControlBuilder, FORM_COMPONENT_CONTROL} from '@anglr/dynamic/form';
import {generateId} from '@jscrpt/common';

import {FormBlockComponentOptions} from './formBlock.options';
import {FormBlockLayoutMetadataLoader, FormBlockRelationsMetadataLoader} from './formBlock.metadata';

/**
 * Component used for displaying form block
 */
@Component(
{
    selector: 'form-block',
    templateUrl: 'formBlock.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        LayoutComponentRendererSADirective,
    ],
    providers:
    [
        FormComponentControlBuilder,
        LayoutComponentsIteratorService,
        LayoutEditorMetadataExtractor,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@RelationsEditorMetadata(FormBlockRelationsMetadataLoader)
@LayoutEditorMetadata(FormBlockLayoutMetadataLoader)
export class FormBlockSAComponent extends LayoutComponentBase<FormBlockComponentOptions> implements LayoutComponent<FormBlockComponentOptions>
{
    //######################### protected properties #########################

    /**
     * Root form group builder
     */
    protected formComponentControlBuilder: FormComponentControlBuilder = inject(FormComponentControlBuilder);

    /**
     * Angular injector for component
     */
    protected formInjector: Injector = inject(Injector);

    /**
     * Instance of root form group
     */
    protected formGroup: FormGroup|undefined|null;

    /**
     * @inheritdoc
     */
    protected override async onInit(): Promise<void>
    {
        this.formGroup = await this.formComponentControlBuilder.build(<LayoutComponentMetadata<FormBlockComponentOptions>>
        {
            id: generateId(10),
            name: 'formBlock',
            package: 'sample-package',
            options: this.options,
        });        

        this.formInjector = Injector.create(
            {
                parent: this.injector,
                providers:
                [
                    <ValueProvider>
                    {
                        provide: FORM_COMPONENT_CONTROL,
                        useValue: this.formGroup,
                    }
                ]
            }
        );

        this.changeDetector.detectChanges();

        setTimeout(() =>
        {
            console.log(this.formGroup, this.options?.content);
        }, 2000);
    }
}