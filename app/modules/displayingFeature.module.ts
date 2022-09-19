import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CommonUtilsModule, CommonLocalizeModule, TooltipModule, CastPipesModule} from '@anglr/common';
import {NumeralModule} from '@anglr/common/numeral';
import {AuthorizationModule} from '@anglr/authentication';
import {DatePipesModule} from '@anglr/datetime';
import {TranslateModule} from '@ngx-translate/core';

/**
 * Common module for displaying readonly data helpers
 */
@NgModule(
{
    exports:
    [
        CommonModule,
        RouterModule,
        CommonUtilsModule,
        CommonLocalizeModule,
        NumeralModule,
        TooltipModule,
        CastPipesModule,
        TranslateModule,
        DatePipesModule,
        AuthorizationModule,
    ]
})
export class DisplayingFeatureModule
{
}