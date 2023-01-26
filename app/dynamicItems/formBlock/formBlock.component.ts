import {Component, ChangeDetectionStrategy, inject, Injector, ValueProvider, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LayoutComponent, LayoutComponentBase, LayoutComponentMetadata, LayoutComponentRendererSADirective} from '@anglr/dynamic/layout';
import {DescendantsGetter, LayoutComponentsIteratorService, LayoutEditorMetadata, LayoutEditorMetadataExtractor} from '@anglr/dynamic/layout-editor';
import {HostDisplayBlockStyle} from '@anglr/common';
import {RelationsEditorMetadata, VoidObject} from '@anglr/dynamic/relations-editor';
import {FormComponentControlBuilder, FORM_COMPONENT_CONTROL} from '@anglr/dynamic/form';
import {DynamicOutput} from '@anglr/dynamic/relations';
import {generateId, nameof} from '@jscrpt/common';

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
@DescendantsGetter<FormBlockComponentOptions>(options => options?.content ? [options?.content] : [])
@RelationsEditorMetadata(FormBlockRelationsMetadataLoader)
@LayoutEditorMetadata(FormBlockLayoutMetadataLoader)
export class FormBlockSAComponent<TValue = any> extends LayoutComponentBase<FormBlockComponentOptions> implements LayoutComponent<FormBlockComponentOptions>
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

    //######################### public properties - dynamic outputs #########################

    /**
     * Instance of current form value
     */
    @DynamicOutput()
    public value: TValue|undefined|null;

    /**
     * Occurs when form is submitted
     */
    @DynamicOutput({skipInit: true})
    public submit: VoidObject|undefined|null;

    //######################### protected methdos - template bindings #########################

    /**
     * Triggers submit event of form block
     * @param event - Event that occured
     */
    protected submitForm(event: SubmitEvent): void
    {
        event.preventDefault();
        event.stopPropagation();

        this.submit = {};
    }

    //######################### protected methods - overrides #########################
    
    /**
     * @inheritdoc
     */
    protected override async onInit(): Promise<void>
    {
        this.formGroup = await this.formComponentControlBuilder.build(<LayoutComponentMetadata<FormBlockComponentOptions>>
        {
            id: generateId(10),
            name: 'formBlock',
            package: 'sample-components',
            options: this.options,
        });

        this.formGroup.valueChanges.subscribe(value => this.value = value);
        this.value = this.formGroup.value;

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
        });

        this.changeDetector.detectChanges();
    }

    /**
     * @inheritdoc
     */
    protected override onChanges(changes: SimpleChanges): void
    {
        if(nameof<FormBlockSAComponent>('value') in changes)
        {
            this.formGroup?.patchValue(this.value ?? {}, {emitEvent: false});
        }
    }
}