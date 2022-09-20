import {Component, OnDestroy, AfterViewInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LOGGER, Logger} from '@anglr/common';
import {consoleAnimationTrigger} from '@anglr/common/structured-log';
import {AppHotkeysService} from '@anglr/common/hotkeys';
import {AuthenticationService} from '@anglr/authentication';
import {fadeInOutTrigger} from '@anglr/animations';
import {nameof} from '@jscrpt/common';
import {TranslateService} from '@ngx-translate/core';
import {Hotkey} from 'angular2-hotkeys';
import {Subscription} from 'rxjs';

import {loaderTrigger, routeAnimationTrigger} from './app.component.animations';
import {SettingsService} from '../services/settings';
import {SettingsGeneral, SettingsDebug} from '../config';
import version from '../../config/version.json';
import {DynamicRoutesService} from '../services/dynamicRoutes';

/**
 * Application entry component
 */
@Component(
{
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    animations: [routeAnimationTrigger, fadeInOutTrigger, consoleAnimationTrigger, loaderTrigger],
    providers: [AppHotkeysService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy
{
    //######################### private fields #########################
    
    /**
     * Subscription for router outlet activation changes
     */
    private _routerOutletActivatedSubscription: Subscription|undefined|null;

    /**
     * Subscription for authenticated changes
     */
    private _authChangedSubscription: Subscription|undefined|null;

    /**
     * Subscription for changes of general settings
     */
    private _settingsChangeSubscription: Subscription|undefined|null;

    /**
     * Subscription for changes of debugging settings
     */
    private _settingsDebuggingChangeSubscription: Subscription|undefined|null;

    /**
     * Currently active theme
     */
    private _theme: string;

    //######################### public properties - template bindings #########################

    /**
     * Indication whether is console visible
     */
    public consoleVisible: boolean = false;

    /**
     * Indication whether is used authenticated
     */
    public authenticated: boolean = false;

    /**
     * Name of state for routed component animation
     */
    public routeComponentState: string = 'none';

    /**
     * Current version of gui
     */
    public guiVersion: string = version.version;

    /**
     * Version of server
     */
    public serverVersion: string = '';

    /**
     * Name of server
     */
    public serverName: string = '';

    /**
     * Indication whether is application initialized
     */
    public initialized: boolean = false;

    //######################### public properties - children #########################

    /**
     * Router outlet that is used for loading routed components
     */
    @ViewChild('outlet')
    public routerOutlet: RouterOutlet|undefined;

    //######################### constructor #########################
    constructor(_authSvc: AuthenticationService,
                translateSvc: TranslateService,
                private _changeDetector: ChangeDetectorRef,
                private _appHotkeys: AppHotkeysService,
                private _dynamicRoutes: DynamicRoutesService,
                settings: SettingsService,
                @Inject(LOGGER) logger: Logger,
                @Inject(DOCUMENT) document: Document,)
    {
        logger.verbose('Application is starting, main component constructed.');

        document.body.classList.add('app-page', settings.settings.theme);
        this._theme = settings.settings.theme;

        this._settingsChangeSubscription = settings.settingsChange
            .subscribe(itm => 
            {
                if(itm == nameof<SettingsGeneral>('theme'))
                {
                    document.body.classList.remove(this._theme);
                    this._theme = settings.settings.theme;
                    document.body.classList.add(this._theme);
                }

                if(itm == nameof<SettingsGeneral>('language'))
                {
                    translateSvc.use(settings.settings.language);
                    this._changeDetector.detectChanges();
                }
            });

        this._settingsDebuggingChangeSubscription = settings.settingsDebuggingChange
            .subscribe(itm => 
            {
                if(itm == nameof<SettingsDebug>('consoleEnabled'))
                {
                    this._toggleConsoleHotkey();
                }
            });

        translateSvc.setDefaultLang('en');
        translateSvc.use(settings.settings.language);

        _authSvc
            .getUserIdentity()
            .then(identity =>
            {
                this.authenticated = identity.isAuthenticated;

                _changeDetector.detectChanges();
            });

        this._authChangedSubscription = _authSvc.authenticationChanged.subscribe(identity =>
        {
            this.authenticated = identity.isAuthenticated;

            _changeDetector.detectChanges();
        });

        if(settings.settingsDebugging?.consoleEnabled)
        {
            this._toggleConsoleHotkey();
        }
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public async ngOnInit(): Promise<void>
    {
        await this._dynamicRoutes.initialize();
    }

    //######################### public methods - implementation of AfterViewInit #########################
    
    /**
     * Called when view was initialized
     */
    public ngAfterViewInit(): void
    {
        this._routerOutletActivatedSubscription = this.routerOutlet?.activateEvents.subscribe(() =>
        {
            this.routeComponentState = this.routerOutlet?.activatedRouteData['animation'] || (<any>this.routerOutlet?.activatedRoute.component).name;
        });

        this.initialized = true;
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._routerOutletActivatedSubscription?.unsubscribe();
        this._routerOutletActivatedSubscription = null;

        this._authChangedSubscription?.unsubscribe();
        this._authChangedSubscription = null;

        this._settingsChangeSubscription?.unsubscribe();
        this._settingsChangeSubscription = null;

        this._settingsDebuggingChangeSubscription?.unsubscribe();
        this._settingsDebuggingChangeSubscription = null;

        this._appHotkeys.destroy();
    }

    //######################### private methods #########################

    /**
     * Toggles hotkey for displaying console log
     */
    private _toggleConsoleHotkey()
    {
        const oldHelpHotkey = this._appHotkeys.hotkeys.get('~');

        if(oldHelpHotkey)
        {
            this._appHotkeys.hotkeys.remove(oldHelpHotkey);
        }
        else
        {
            this._appHotkeys.hotkeys.add(new Hotkey('~', () =>
            {
                this.consoleVisible = !this.consoleVisible;
                this._changeDetector.detectChanges();

                return false;
            }, undefined, 'Show console'));
        }
    }
}