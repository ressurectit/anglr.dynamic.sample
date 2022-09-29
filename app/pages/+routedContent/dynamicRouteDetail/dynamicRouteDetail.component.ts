import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Location} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {FormModelBuilder, FormModelGroup} from '@anglr/common/forms';
import {generateId} from '@jscrpt/common';

import {DynamicRoute, DynamicRouteModel, DynamicRoutesService} from '../../../services/dynamicRoutes';

/**
 * Component used for editing dynamic route info
 */
@Component(
{
    selector: 'dynamic-route-view',
    templateUrl: 'dynamicRouteDetail.component.html',
    // styleUrls: ['dynamicRouteDetail.component.scss'],
    providers:
    [
        FormModelBuilder,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'new'})
@Authorize('dynamicRouteDetail-page')
export class DynamicRouteDetailComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Instance of form for dynamic route
     */
    protected form: FormGroup<FormModelGroup<DynamicRoute>>;

    //######################### constructor #########################
    constructor(formModelBuilder: FormModelBuilder,
                private _dynamicRoutes: DynamicRoutesService,
                private _location: Location,)
    {
        this.form = formModelBuilder.build<DynamicRoute>(new DynamicRouteModel(null));
    }

    //######################### protected methods - template bindings #########################

    /**
     * Saves dynamic route
     */
    protected async save(): Promise<void>
    {
        const value = this.form.value as Required<DynamicRoute>;

        if(!value.template)
        {
            value.template = generateId(12);
        }

        this._dynamicRoutes.addRoute(value);
        this._location.back();
    }
}