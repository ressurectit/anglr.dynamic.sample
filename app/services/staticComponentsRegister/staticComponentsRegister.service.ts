import {Injectable, Type} from '@angular/core';
import {StaticComponentsRegister as Register} from '@anglr/dynamic/relations-editor';
import {Dictionary} from '@jscrpt/common';

/**
 * Static components register for demo app
 */
@Injectable()
export class StaticComponentsRegister extends Register
{
    //######################### protected methods - overrides #########################

    /**
     * @inheritdoc
     */
    protected getDefinedTypes(): Dictionary<Type<any>>
    {
        const result: Dictionary<Type<any>> = {};

        return result;
    }
}