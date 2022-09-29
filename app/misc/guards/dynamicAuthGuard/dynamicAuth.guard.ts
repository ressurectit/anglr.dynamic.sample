import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, UrlTree, UrlSegmentGroup} from '@angular/router';
import {AuthenticationService, AuthorizeOptions, evaluatePermissions} from '@anglr/authentication';
import {isBlank, flatMapArray} from '@jscrpt/common';

import {DynamicRouteData} from '../../../services/dynamicRoutes/dynamicRoutes.interface';

/**
 * Routing guard that is used for authorization of user for dynamic components
 */
@Injectable({providedIn: 'root'})
export class DynamicAuthGuard implements CanActivate
{
    //######################### constructor #########################
    constructor(private _authSvc: AuthenticationService,
                private _router: Router)
    {
    }

    //######################### implementation of CanActivate #########################

    /**
     * Tests whether component can be activated
     * @param next - Information about next coming route
     */
    public async canActivate(next: ActivatedRouteSnapshot) : Promise<boolean>
    {
        const data = next.data as DynamicRouteData;

        if(!data.permission)
        {
            return true;
        }

        const authOptions: AuthorizeOptions =
        {
            permission: data.permission,
        };

        const addCondition: boolean = true;
        const userIdentity = this._authSvc.userIdentity;

        if(isBlank(userIdentity))
        {
            throw new Error('AuthenticationService must be initialized before first use of AuthGuard');
        }

        const authorized = evaluatePermissions(userIdentity.permissions,
                                               authOptions.permission,
                                               authOptions.andCondition ?? false,
                                               authOptions.conditionString ?? false,
                                               addCondition);

        const urlSegmentGroup = new UrlSegmentGroup(flatMapArray(next.pathFromRoot.map(itm => itm.url)), {});
        const urlTree = new UrlTree();
        urlTree.root = urlSegmentGroup;
        urlTree.queryParams = {};
        const nextPath = this._router.serializeUrl(urlTree);

        //user is authenticated and not authorized
        if(!authorized && userIdentity.isAuthenticated)
        {
            this._authSvc.showAccessDenied();

            return false;
        }

        //not authorized, not authenticated, not on login page
        else if(!authorized && !userIdentity.isAuthenticated && !this._authSvc.isAuthPage(nextPath))
        {
            this._authSvc.showAuthPage();
            
            return false;
        }

        return true;
    }
}