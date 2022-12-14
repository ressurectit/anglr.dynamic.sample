import {FactoryProvider, APP_INITIALIZER, ClassProvider, ValueProvider, Provider, ExistingProvider} from '@angular/core';
import {AuthenticationService, AUTH_INTERCEPTOR_PROVIDER, SUPPRESS_AUTH_INTERCEPTOR_PROVIDER, AuthenticationServiceOptions} from '@anglr/authentication';
import {LocalPermanentStorageService} from '@anglr/common/store';
import {PROGRESS_INTERCEPTOR_PROVIDER, GlobalizationService, STRING_LOCALIZATION, PERMANENT_STORAGE, DebugDataEnabledService, DEFAULT_NOTIFICATIONS, NOTIFICATIONS} from '@anglr/common';
import {ConsoleSinkConfigService, LOGGER_REST_CLIENT, REST_SINK} from '@anglr/common/structured-log';
import {NgxTranslateStringLocalizationService} from '@anglr/translate-extensions';
import {ERROR_HANDLING_NOTIFICATIONS, HttpGatewayTimeoutInterceptorOptions, NoConnectionInterceptorOptions, HTTP_GATEWAY_TIMEOUT_INTERCEPTOR_PROVIDER, NO_CONNECTION_INTERCEPTOR_PROVIDER, SERVICE_UNAVAILABLE_INTERCEPTOR_PROVIDER, ANGLR_EXCEPTION_HANDLER_PROVIDER, ERROR_WITH_URL_EXTENDER, HTTP_SERVER_ERROR_INTERCEPTOR_PROVIDER, CLIENT_ERROR_NOTIFICATIONS, handle404Func, HttpClientErrorResponseMapper, HttpClientValidationErrorResponseMapper, HTTP_CLIENT_ERROR_RESPONSE_MAPPER, HTTP_CLIENT_VALIDATION_ERROR_RESPONSE_MAPPER, RestNotFoundError} from '@anglr/error-handling';
import {DIALOG_INTERNAL_SERVER_ERROR_RENDERER_PROVIDER} from '@anglr/error-handling/material';
import {NO_DATA_RENDERER_OPTIONS, NoDataRendererOptions, PAGING_OPTIONS, BasicPagingOptions, METADATA_SELECTOR_TYPE, METADATA_SELECTOR_OPTIONS, CONTENT_RENDERER_OPTIONS, TableContentRendererOptions, HEADER_CONTENT_RENDERER_OPTIONS, TableHeaderContentRendererOptions, GRID_INITIALIZER_TYPE, GRID_INITIALIZER_OPTIONS, QueryPermanentStorageGridInitializerOptions, QueryGridInitializerComponent} from '@anglr/grid';
import {DialogMetadataSelectorComponent, DialogMetadataSelectorOptions} from '@anglr/grid/material';
import {ReservedSpaceValidationErrorsContainerComponent, ValidationErrorRendererFactoryOptions, VALIDATION_ERROR_MESSAGES, VALIDATION_ERROR_RENDERER_FACTORY_OPTIONS} from '@anglr/common/forms';
import {ConfirmationDialogOptions, CONFIRMATION_DIALOG_OPTIONS, MovableTitledDialogComponent, TitledDialogServiceOptions} from '@anglr/common/material';
import {FLOATING_UI_POSITION} from '@anglr/common/floating-ui';
import {MD_HELP_NOTIFICATIONS, RenderMarkdownConfig, RENDER_MARKDOWN_CONFIG} from '@anglr/md-help/web';
import {ClientErrorHandlingMiddleware, HttpClientErrorCustomHandlerDef, HTTP_CLIENT_ERROR_CUSTOM_HANDLER, REST_ERROR_HANDLING_MIDDLEWARE_ORDER} from '@anglr/error-handling/rest';
import {NORMAL_STATE_OPTIONS, NormalStateOptions, POSITIONER_TYPE} from '@anglr/select';
import {PopperJsPositionerComponent} from '@anglr/select/popperJs';
import {DATE_API} from '@anglr/datetime';
import {DateFnsDateApi, DateFnsLocale, DATE_FNS_DATE_API_OBJECT_TYPE, DATE_FNS_FORMAT_PROVIDER, DATE_FNS_LOCALE} from '@anglr/datetime/date-fns';
import {LoggerMiddleware, MockLoggerMiddleware, ReportProgressMiddleware, ResponseTypeMiddleware, REST_METHOD_MIDDLEWARES, REST_MOCK_LOGGER} from '@anglr/rest';
import {DATETIME_REST_DATE_API} from '@anglr/rest/datetime';
import {isString, isJsObject} from '@jscrpt/common';
import {LogEventLevel} from 'structured-log';
import {sk} from 'date-fns/locale';

import {config} from '../config';
import {GlobalizationService as GlobalizationServiceImpl} from '../services/globalization/globalization.service';
import {NOTHING_SELECTED} from '../misc/constants';
import {SettingsService, LocalSettingsStorage} from '../services/settings';
import {SETTINGS_STORAGE} from '../misc/tokens';
import {RestLoggerService} from '../services/api/restLogger';
import {AccountAuthOptions} from '../services/api/account/accountAuth.options';
import {RestMockLoggerService} from '../services/api/restMockLogger';

/**
 * Creates APP initialization factory, that first try to authorize user before doing anything else
 * @param authService Authentication service used for authentication of user
 */
export function appInitializerFactory(authService: AuthenticationService<any>): () => Promise<void>
{
    return async () =>
    {
        try
        {
            await authService
                .getUserIdentity();
        }
        catch(e)
        {
            alert(`Authentication failed: ${e}`);

            throw e;
        }
    };
}

/**
 * Factory method for creating HttpGatewayTimeoutInterceptorOptions
 */
export function httpGatewayTimeoutInterceptorOptionsFactory(): HttpGatewayTimeoutInterceptorOptions
{
    return new HttpGatewayTimeoutInterceptorOptions('Server neodpovedal v stanovenom ??ase.');
}

/**
 * Factory method for creating NoConnectionInterceptorOptions
 */
export function noConnectionInterceptorOptionsFactory(): NoConnectionInterceptorOptions
{
    return new NoConnectionInterceptorOptions('Server je mimo prev??dzky.');
}

/**
 * Array of providers that are used in app module
 */
export const providers: Provider[] =
[
    //######################### HTTP INTERCEPTORS #########################
    HTTP_GATEWAY_TIMEOUT_INTERCEPTOR_PROVIDER,
    SERVICE_UNAVAILABLE_INTERCEPTOR_PROVIDER,
    HTTP_SERVER_ERROR_INTERCEPTOR_PROVIDER,
    NO_CONNECTION_INTERCEPTOR_PROVIDER,
    SUPPRESS_AUTH_INTERCEPTOR_PROVIDER,
    AUTH_INTERCEPTOR_PROVIDER,
    PROGRESS_INTERCEPTOR_PROVIDER,

    //######################### NO CONNECTION INTERCEPTOR OPTIONS #########################
    <FactoryProvider>
    {
        useFactory: noConnectionInterceptorOptionsFactory,
        provide: NoConnectionInterceptorOptions
    },

    //######################### HTTP GATEWAY TIMEOUT INTERCEPTOR OPTIONS #########################
    <FactoryProvider>
    {
        useFactory: httpGatewayTimeoutInterceptorOptionsFactory,
        provide: HttpGatewayTimeoutInterceptorOptions
    },

    //######################### GLOBALIZATION SERVICE #########################
    <ClassProvider>
    {
        provide: GlobalizationService,
        useClass: GlobalizationServiceImpl
    },

    //######################### AUTHENTICATION & AUTHORIZATION #########################
    <ClassProvider>
    {
        provide: AuthenticationServiceOptions,
        useClass: AccountAuthOptions
    },

    //######################### ERROR HANDLING #########################
    ERROR_WITH_URL_EXTENDER,
    ANGLR_EXCEPTION_HANDLER_PROVIDER,
    DIALOG_INTERNAL_SERVER_ERROR_RENDERER_PROVIDER,

    //######################### APP INITIALIZER #########################
    <FactoryProvider>
    {
        useFactory: appInitializerFactory,
        provide: APP_INITIALIZER,
        deps: [AuthenticationService],
        multi: true
    },

    //######################### GRID GLOBAL OPTIONS #########################
    <ValueProvider>
    {
        provide: NO_DATA_RENDERER_OPTIONS,
        useValue: <NoDataRendererOptions>
        {
            texts:
            {
                loading: 'Nahr??vam d??ta ...',
                noData: 'Neboli n??jden?? d??ta odpovedaj??ce zadan??m parametrom',
                notLoaded: 'Neboli na????tan?? ??iadne d??ta zatia??'
            }
        }
    },
    <ValueProvider>
    {
        provide: GRID_INITIALIZER_TYPE,
        useValue: QueryGridInitializerComponent
    },
    <ValueProvider>
    {
        provide: PAGING_OPTIONS,
        useValue: <BasicPagingOptions>
        {
            itemsPerPageValues: [15, 30, 60],
            initialItemsPerPage: 15
        }
    },
    <ValueProvider>
    {
        provide: METADATA_SELECTOR_TYPE,
        useValue: DialogMetadataSelectorComponent
    },
    <ValueProvider>
    {
        provide: METADATA_SELECTOR_OPTIONS,
        useValue: <DialogMetadataSelectorOptions>
        {
            showButtonVisible: false
        }
    },
    <ValueProvider>
    {
        provide: GRID_INITIALIZER_OPTIONS,
        useValue: <QueryPermanentStorageGridInitializerOptions>
        {
            storageIppName: 'all-grid-ipp'
        }
    },
    <ValueProvider>
    {
        provide: CONTENT_RENDERER_OPTIONS,
        useValue: <TableContentRendererOptions>
        {
            cssClasses:
            {
                containerDiv: 'table-container thin-scrollbar'
            }
        }
    },
    <ValueProvider>
    {
        provide: HEADER_CONTENT_RENDERER_OPTIONS,
        useValue: <TableHeaderContentRendererOptions>
        {
            cssClasses:
            {
                thDefault: 'header-default fixed-header'
            }
        }
    },
    
    //############################ SELECT GLOBAL OPTIONS ############################
    <ValueProvider>
    {
        provide: NORMAL_STATE_OPTIONS,
        useValue: <NormalStateOptions<any>>
        {
            texts:
            {
                nothingSelected: NOTHING_SELECTED
            }
        }
    },
    <ValueProvider>
    {
        provide: POSITIONER_TYPE,
        useValue: PopperJsPositionerComponent,
    },

    //######################### STRING LOCALIZATION #########################
    <ClassProvider>
    {
        provide: STRING_LOCALIZATION,
        useClass: NgxTranslateStringLocalizationService
    },

    //######################### PERMANENT STORAGE #########################
    <ClassProvider>
    {
        provide: PERMANENT_STORAGE,
        useClass: LocalPermanentStorageService
    },

    //######################### LOGGER #########################
    REST_SINK,
    <FactoryProvider>
    {
        provide: ConsoleSinkConfigService,
        useFactory: (settingsSvc: SettingsService) =>
        {
            return new ConsoleSinkConfigService(undefined, LogEventLevel[settingsSvc?.settingsLogging?.consoleLogLevel as any] as any);
            //TODO: solve typings
        },
        deps: [SettingsService]
    },
    <ClassProvider>
    {
        provide: LOGGER_REST_CLIENT,
        useClass: RestLoggerService
    },
    <ClassProvider>
    {
        provide: SETTINGS_STORAGE,
        useClass: LocalSettingsStorage
    },

    //######################### DEBUG DATA #########################
    <FactoryProvider>
    {
        provide: DebugDataEnabledService,
        useFactory: (settingsSvc: SettingsService) =>
        {
            const debugDataEnabled = new DebugDataEnabledService();

            debugDataEnabled.setEnabled(settingsSvc.settingsDebugging?.debugData);

            return debugDataEnabled;
        },
        deps: [SettingsService]
    },

    //######################### DATE API #########################
    <ClassProvider>
    {
        provide: DATE_API,
        useClass: DateFnsDateApi
    },
    DATE_FNS_FORMAT_PROVIDER,
    DATE_FNS_DATE_API_OBJECT_TYPE,
    <ValueProvider>
    {
        provide: DATE_FNS_LOCALE,
        useValue: <DateFnsLocale>
        {
            locale: sk
        }
    },

    //######################### VALIDATION ERRORS #########################

    <ValueProvider>
    {
        provide: VALIDATION_ERROR_MESSAGES,
        useValue:
        {
            required: 'Polo??ka je povinn??.',
            number: 'Polo??ka mus?? by?? ????slo.',
            pattern: 'Polo??ka nie je v po??adovanom form??te.',
            minValue: 'Nedodr??an?? minim??lna povolen?? hodnota.',
            maxValue: 'Nedodr??an?? maxim??lna povolen?? hodnota.',
            minlength: 'Nedodr??an?? minim??lna d????ka.',
            maxlength: 'Nedodr??an?? maxim??lna d????ka.',
            birthNumber: 'Nespr??vny form??t rodn??ho ????sla.',
            email: 'Polo??ka mus?? by?? email.',
            availableUsername: 'Prihlasovacie meno je pou??it??',
        }
    },
    <ValueProvider>
    {
        provide: VALIDATION_ERROR_RENDERER_FACTORY_OPTIONS,
        useValue: <ValidationErrorRendererFactoryOptions>
        {
            container: ReservedSpaceValidationErrorsContainerComponent
        }
    },

    //######################### NOTIFICATIONS #########################
    DEFAULT_NOTIFICATIONS,
    <ExistingProvider>
    {
        provide: MD_HELP_NOTIFICATIONS,
        useExisting: NOTIFICATIONS
    },
    <ExistingProvider>
    {
        provide: ERROR_HANDLING_NOTIFICATIONS,
        useExisting: NOTIFICATIONS
    },
    <ExistingProvider>
    {
        provide: CLIENT_ERROR_NOTIFICATIONS,
        useExisting: NOTIFICATIONS
    },

    //######################### TITLED DIALOG #########################

    <ValueProvider>
    {
        provide: TitledDialogServiceOptions,
        useValue: new TitledDialogServiceOptions(MovableTitledDialogComponent)
    },
    
    //######################### CONFIRMATION DIALOG #########################
    <ValueProvider>
    {
        provide: CONFIRMATION_DIALOG_OPTIONS,
        useValue: <ConfirmationDialogOptions>
        {
            confirmationText: 'Prajete si pokra??ova???',
            dialogCancelText: 'Nie',
            dialogConfirmText: '??no'
        }
    },

    //######################### POSITION #########################
    FLOATING_UI_POSITION,

    //######################### MARKDOWN #########################
    <ValueProvider>
    {
        provide: RENDER_MARKDOWN_CONFIG,
        useValue: <RenderMarkdownConfig>
        {
            assetsPathPrefix: 'dist/md',
            baseUrl: '/pomoc'
        }
    },

    //######################### REST CONFIG #########################
    DATETIME_REST_DATE_API,
    <ClassProvider>
    {
        provide: REST_MOCK_LOGGER,
        useClass: RestMockLoggerService
    },
    REST_ERROR_HANDLING_MIDDLEWARE_ORDER,
    <ValueProvider>
    {
        provide: REST_METHOD_MIDDLEWARES,
        useValue:
        [
            LoggerMiddleware,
            ResponseTypeMiddleware,
            ReportProgressMiddleware,
            ClientErrorHandlingMiddleware,
            ...jsDevMode ? [...config.configuration?.disableMockLogger ? [] : [MockLoggerMiddleware]] : [],
        ]
    },
    <ValueProvider>
    {
        provide: HTTP_CLIENT_ERROR_RESPONSE_MAPPER,
        useValue: <HttpClientErrorResponseMapper>(err => 
        {
            if(err?.error?.errors)
            {
                return err?.error?.errors;
            }

            if(isString(err?.error))
            {
                return [err?.error];
            }

            if(isJsObject(err?.error))
            {
                return [JSON.stringify(err?.error)];
            }
            
            return [err.message];
        })
    },
    <ValueProvider>
    {
        provide: HTTP_CLIENT_VALIDATION_ERROR_RESPONSE_MAPPER,
        useValue: <HttpClientValidationErrorResponseMapper>(err => 
        {
            if(err?.error?.validationErrors)
            {
                return err?.error?.validationErrors;
            }

            return null;
        })
    },
    <ValueProvider>
    {
        provide: HTTP_CLIENT_ERROR_CUSTOM_HANDLER,
        useValue: <Record<number, HttpClientErrorCustomHandlerDef>>
        {
            404: [handle404Func, error => new RestNotFoundError(error.errors)],
        }
    },
];
