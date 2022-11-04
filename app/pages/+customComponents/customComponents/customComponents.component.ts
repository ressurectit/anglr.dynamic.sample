import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';

/**
 * Component used for displaying custom components editation
 */
@Component(
{
    selector: 'custom-components-view',
    templateUrl: 'customComponents.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'customComponents'})
@Authorize('customComponents-page')
export class CustomComponentsComponent
{
}