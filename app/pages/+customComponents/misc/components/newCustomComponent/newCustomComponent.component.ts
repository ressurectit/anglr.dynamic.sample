import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {HasErrorModule, SubmittedService} from '@anglr/common/forms';
import {StackPanelComponentOptions} from '@anglr/dynamic/basic-components';
import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {generateId} from '@jscrpt/common';

import {createStoreDataServiceFactory} from '../../../../../misc/factories';
import {StoreDataService} from '../../../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../../../misc/interfaces';
import {SampleCustomComponentsRegister} from '../../../../../services/sampleCustomComponentsRegister';

/**
 * Component used for adding new custom component as dialog
 */
@Component(
{
    selector: 'new-custom-component',
    templateUrl: 'newCustomComponent.component.html',
    standalone: true,
    imports:
    [
        MatDialogModule,
        ReactiveFormsModule,
        HasErrorModule,
    ],
    providers:
    [
        SampleCustomComponentsRegister,
        SubmittedService,
        createStoreDataServiceFactory('DYNAMIC_CONTENT_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCustomComponentSAComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control for custom component name
     */
    protected name: FormControl<string> = new FormControl();

    //######################### constructor #########################
    constructor(private _submittedSvc: SubmittedService,
                private _store: StoreDataService<LayoutRelationsMetadata>,
                private _customComponents: SampleCustomComponentsRegister,
                private _dialog: MatDialogRef<NewCustomComponentSAComponent>,)
    {
    }

    //######################### protected methods - template bindings #########################

    /**
     * Creates new custom component
     */
    protected createCustomComponent(): void
    {
        this._submittedSvc.setSubmitted();

        if(this.name.invalid)
        {
            return;
        }

        this._store.setData(this.name.value,
        {
            layout:
            {
                id: `root-${generateId(10)}`,
                displayName: 'root',
                package: 'basic-components',
                name: 'stackPanel',
                options: <StackPanelComponentOptions>
                {
                    children: [] as LayoutComponentMetadata[],
                },
            },
            relations: [], 
        });

        this._customComponents.addCustomComponent(this.name.value);
        this._dialog.close();
    }
}