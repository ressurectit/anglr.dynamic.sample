import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * Component used displaying dynamic content pages
 */
@Component(
{
    selector: 'dynamic-content-view',
    templateUrl: 'dynamicContent.component.html',
    // styleUrls: ['dynamicContent.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicContentSAComponent
{
}