import {Injectable, Type} from '@angular/core';
import {StaticComponentsRegister as Register} from '@anglr/dynamic/relations-editor';
import {Dictionary} from '@jscrpt/common';

import DynamicDataResolverRelations from '../../../../../dynamicItems/dynamicDataResolver/type';
import ActivatedRouteSnapshotRelations from '../../../../../dynamicItems/activatedRouteSnapshot/type';

/**
 * Static components register for resolver relations
 */
@Injectable()
export class ResolverStaticRegister extends Register
{
    //######################### protected methods - overrides #########################

    /**
     * @inheritdoc
     */
    protected getDefinedTypes(): Dictionary<Type<any>>
    {
        const result: Dictionary<Type<any>> = {};

        result[DynamicDataResolverRelations.relationsId] = DynamicDataResolverRelations;
        result[ActivatedRouteSnapshotRelations.relationsId] = ActivatedRouteSnapshotRelations;

        return result;
    }
}