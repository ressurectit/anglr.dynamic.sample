import {Injectable} from '@angular/core';
import {PackageManager} from '@anglr/dynamic';

/**
 * Relations package manager for sample app
 */
@Injectable()
export class SampleRelationsPackageManager extends PackageManager
{
    //######################### constructor #########################
    constructor()
    {
        super('RELATIONS_PACKAGES_STORE');
    }
}