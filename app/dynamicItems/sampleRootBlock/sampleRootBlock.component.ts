import {Component, ChangeDetectionStrategy} from '@angular/core';
import {LayoutComponent, LayoutComponentBase, LayoutComponentRendererSADirective} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {HostDisplayBlockStyle} from '@anglr/common';

import {SampleRootBlockComponentOptions} from './sampleRootBlock.options';
import {SampleRootBlockLayoutMetadataLoader} from './sampleRootBlock.metadata';

/**
 * Component used for displaying sample root block
 */
@Component(
{
    selector: 'sample-root-block',
    templateUrl: 'sampleRootBlock.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        LayoutComponentRendererSADirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(SampleRootBlockLayoutMetadataLoader)
export class SampleRootBlockSAComponent extends LayoutComponentBase<SampleRootBlockComponentOptions> implements LayoutComponent<SampleRootBlockComponentOptions>
{
}