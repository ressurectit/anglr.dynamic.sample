import {Injectable} from '@angular/core';
import {PackageManager} from '@anglr/dynamic';

/**
 * Layout package manager for sample app
 */
@Injectable()
export class SampleLayoutPackageManager extends PackageManager
{
    //######################### constructor #########################
    constructor()
    {
        super('LAYOUT_PACKAGES_STORE');
    }
}