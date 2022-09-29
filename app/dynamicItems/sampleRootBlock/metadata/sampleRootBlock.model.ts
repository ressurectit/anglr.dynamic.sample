import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {mapValuesToThis} from '@jscrpt/common';

import {SampleRootBlockComponentOptions} from '../sampleRootBlock.options';

/**
 * Sample root block model for properties editor
 */
export class SampleRootBlockModel implements SampleRootBlockComponentOptions
{
    //######################### public properties #########################

    /**
     * @inheritdoc
     */
    public content: LayoutComponentMetadata|undefined|null;

    //######################### constructor #########################
    constructor(value: SampleRootBlockComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}