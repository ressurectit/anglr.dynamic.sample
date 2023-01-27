import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';

import {DynamicRoute} from '../services/dynamicRoutes';

export const demoSampleStylesCustomComponentOptions =
{
};

export const demoSampleStylesCustomComponentLayout: LayoutComponentMetadata =
{
    id: 'root-dsrvqcxrtl',
    displayName: 'root',
    package: 'basic-components',
    name: 'stackPanel',
    options: {
        children: [
            {
                id: 'styleBlock-dtkmaocjubqtrjiy',
                displayName: 'styleBlock-dtkmaocjubqtrjiy',
                package: 'css-components',
                name: 'styleBlock',
                options: {
                    content: {
                        id: 'placeholder-oyknerqmilbelnjk',
                        displayName: 'placeholder-oyknerqmilbelnjk',
                        package: 'custom-components',
                        name: 'placeholder',
                        options: {},
                        scope: null
                    },
                    style: '.title\r\n{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    margin-left: 4px;\r\n    background-color: #ececec;\r\n    padding: 4px 8px;\r\n    border-radius: 8px;\r\n}\r\n\r\nform-text-field:not(:last-child)\r\n{\r\n    margin-right: 10px;\r\n}\r\n\r\nform-text-field>label\r\n{\r\n   display: block;\r\n}\r\n\r\nform-text-field>input\r\n{\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    box-shadow: none;\r\n    font-size: 12px;\r\n    padding-left: 7px;\r\n    width: 100%;\r\n    font-family: "Inter";\r\n}\r\n\r\ntable\r\n{\r\n   width: 100%;\r\n}\r\n\r\n.tile-link\r\n{\r\n    padding: 10px 40px;\r\n    background-color: #6aba4f;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n}\r\n\r\n.tile-link>a\r\n{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.page-content\r\n{\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    margin-top: 10px;\r\n}'
                },
                scope: null
            }
        ]
    },
    scope: undefined
};

export const demoPageCustomComponentOptions =
{
    configurableProperties: {
        'textBlock-gxlgpmstllxkoouk': {
            TextBlockModel: [
                'text'
            ]
        }
    },
    displayName: '',
    description: ''
};

export const demoPageCustomComponentLayout: LayoutComponentMetadata =
{
    id: 'root-twrfxriruz',
    displayName: 'root',
    package: 'basic-components',
    name: 'stackPanel',
    options: {
        children: [
            {
                id: 'sample styles-osovnahugblinqsb',
                displayName: 'sample styles-osovnahugblinqsb',
                package: 'custom-components',
                name: 'sample styles',
                options: {
                    name: 'sample styles',
                    placeholderContainers: {
                        'placeholder-oyknerqmilbelnjk': {
                            id: 'placeholderContainer-sample styles-osovnahugblinqsb-placeholder-oyknerqmilbelnjk',
                            name: 'placeholderContainer',
                            package: 'custom-components',
                            displayName: 'placeholderContainer-sample styles-osovnahugblinqsb-placeholder-oyknerqmilbelnjk',
                            options: {
                                content: {
                                    id: 'stackPanel-ugonwhkrjibbicnr',
                                    displayName: 'stackPanel-ugonwhkrjibbicnr',
                                    package: 'basic-components',
                                    name: 'stackPanel',
                                    options: {
                                        children: [
                                            {
                                                id: 'textBlock-gxlgpmstllxkoouk',
                                                displayName: 'title',
                                                package: 'basic-components',
                                                name: 'textBlock',
                                                options: {
                                                    text: 'This is title',
                                                    cssClass: 'title',
                                                    margin: {
                                                        top: null,
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    padding: {
                                                        top: null,
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    textStyling: null
                                                },
                                                scope: null
                                            },
                                            {
                                                id: 'placeholder-tejvzbsnwwjjirhu',
                                                displayName: 'content',
                                                package: 'custom-components',
                                                name: 'placeholder',
                                                options: {},
                                                scope: null
                                            }
                                        ],
                                        cssClass: 'page-content',
                                        margin: {
                                            top: null,
                                            right: null,
                                            bottom: null,
                                            left: null
                                        },
                                        padding: {
                                            top: null,
                                            right: null,
                                            bottom: null,
                                            left: null
                                        },
                                        textStyling: null
                                    },
                                    scope: null
                                }
                            },
                            scope: null
                        }
                    }
                },
                scope: null
            }
        ]
    },
    scope: undefined
};

export const demoOverviewRoute: DynamicRoute = 
{
    module: '',
    path: 'overview',
    permission: 'authenticated',
    withResolver: false,
    resolverRelations: null,
    template: 'overview'
};

export const demoDetailRoute: DynamicRoute =
{
    module: '',
    path: 'detail/:id',
    permission: 'authenticated',
    withResolver: true,
    resolverRelations: 'detailResolver',
    template: 'detail'
};

export const demoHomeRoute: DynamicRoute =
{
    module: '',
    path: '',
    permission: 'authenticated',
    withResolver: false,
    resolverRelations: null,
    template: 'home'
};

export const demoOverviewLayout: LayoutComponentMetadata =
{
    id: 'stackPanel-ajqeywbjqh',
    displayName: 'root',
    package: 'basic-components',
    name: 'stackPanel',
    options: {
        children: [
            {
                id: 'page-teewidtdlrurkrix',
                displayName: 'page-teewidtdlrurkrix',
                package: 'custom-components',
                name: 'page',
                options: {
                    name: 'page',
                    placeholderContainers: {
                        'placeholder-tejvzbsnwwjjirhu': {
                            id: 'placeholderContainer-page-teewidtdlrurkrix-placeholder-tejvzbsnwwjjirhu',
                            name: 'placeholderContainer',
                            package: 'custom-components',
                            displayName: 'placeholderContainer-page-teewidtdlrurkrix-placeholder-tejvzbsnwwjjirhu',
                            options: {
                                content: {
                                    id: 'stackPanel-xxptnrqmuiwyhqiw',
                                    displayName: 'stackPanel-xxptnrqmuiwyhqiw',
                                    package: 'basic-components',
                                    name: 'stackPanel',
                                    options: {
                                        children: [
                                            {
                                                id: 'formBlock-gpjxpdbhjxcjptol',
                                                displayName: 'form',
                                                package: 'sample-components',
                                                name: 'formBlock',
                                                options: {
                                                    content: {
                                                        id: 'stackPanel-lhjndppbbbuzgdfe',
                                                        displayName: 'stackPanel-lhjndppbbbuzgdfe',
                                                        package: 'basic-components',
                                                        name: 'stackPanel',
                                                        options: {
                                                            children: [
                                                                {
                                                                    id: 'stackPanel-ehlcpfegubheevch',
                                                                    displayName: 'stackPanel-ehlcpfegubheevch',
                                                                    package: 'basic-components',
                                                                    name: 'stackPanel',
                                                                    options: {
                                                                        horizontal: true,
                                                                        wrap: false,
                                                                        children: [
                                                                            {
                                                                                id: 'textField-rxlqvcuefeenwtki',
                                                                                displayName: 'textField-rxlqvcuefeenwtki',
                                                                                package: 'form-components',
                                                                                name: 'textField',
                                                                                options: {
                                                                                    label: 'Name',
                                                                                    placeholder: 'Enter name',
                                                                                    flex: '1',
                                                                                    controlName: 'name',
                                                                                    controlType: 'FormControl'
                                                                                },
                                                                                scope: null
                                                                            },
                                                                            {
                                                                                id: 'textField-vdfyrgmuejqeomtr',
                                                                                displayName: 'textField-vdfyrgmuejqeomtr',
                                                                                package: 'form-components',
                                                                                name: 'textField',
                                                                                options: {
                                                                                    label: 'Surname',
                                                                                    placeholder: 'Enter surname',
                                                                                    flex: '1',
                                                                                    controlName: 'surname',
                                                                                    controlType: 'FormControl'
                                                                                },
                                                                                scope: null
                                                                            },
                                                                            {
                                                                                id: 'textField-potkokqukosksjou',
                                                                                displayName: 'textField-potkokqukosksjou',
                                                                                package: 'form-components',
                                                                                name: 'textField',
                                                                                options: {
                                                                                    label: 'E-mail',
                                                                                    placeholder: 'Enter e-mail',
                                                                                    flex: '1',
                                                                                    controlName: 'email',
                                                                                    controlType: 'FormControl'
                                                                                },
                                                                                scope: null
                                                                            }
                                                                        ]
                                                                    },
                                                                    scope: null
                                                                },
                                                                {
                                                                    id: 'stackPanel-ethotwlxmixmlsnp',
                                                                    displayName: 'stackPanel-ethotwlxmixmlsnp',
                                                                    package: 'basic-components',
                                                                    name: 'stackPanel',
                                                                    options: {
                                                                        children: [
                                                                            {
                                                                                id: 'textBlock-tmbcomdzpxpxcxcx',
                                                                                displayName: 'textBlock-tmbcomdzpxpxcxcx',
                                                                                package: 'basic-components',
                                                                                name: 'textBlock',
                                                                                options: {
                                                                                    text: '',
                                                                                    flex: '1'
                                                                                },
                                                                                scope: null
                                                                            },
                                                                            {
                                                                                id: 'button-refwsolywgnznhbv',
                                                                                displayName: 'button-refresh',
                                                                                package: 'basic-components',
                                                                                name: 'button',
                                                                                options: {
                                                                                    text: 'refresh',
                                                                                    disabled: false,
                                                                                    buttonCssClass: 'btn btn-info',
                                                                                    cssClass: null,
                                                                                    margin: {
                                                                                        top: null,
                                                                                        right: '10px',
                                                                                        bottom: null,
                                                                                        left: null
                                                                                    },
                                                                                    padding: {
                                                                                        top: null,
                                                                                        right: null,
                                                                                        bottom: null,
                                                                                        left: null
                                                                                    },
                                                                                    textStyling: null
                                                                                },
                                                                                scope: null
                                                                            },
                                                                            {
                                                                                id: 'submitButton-twcqwmfoqnuaimog',
                                                                                displayName: 'submitButton-twcqwmfoqnuaimog',
                                                                                package: 'sample-components',
                                                                                name: 'submitButton',
                                                                                options: {
                                                                                    text: 'search',
                                                                                    disabled: false,
                                                                                    buttonCssClass: 'btn btn-primary'
                                                                                },
                                                                                scope: null
                                                                            }
                                                                        ],
                                                                        horizontal: true,
                                                                        wrap: false,
                                                                        cssClass: null,
                                                                        margin: {
                                                                            top: '10px',
                                                                            right: null,
                                                                            bottom: '10px',
                                                                            left: null
                                                                        },
                                                                        padding: {
                                                                            top: null,
                                                                            right: null,
                                                                            bottom: null,
                                                                            left: null
                                                                        },
                                                                        textStyling: null
                                                                    },
                                                                    scope: null
                                                                }
                                                            ]
                                                        },
                                                        scope: null
                                                    }
                                                },
                                                scope: null
                                            },
                                            {
                                                id: 'gridTable-gbusssjqutylctyh',
                                                displayName: 'grid',
                                                package: 'sample-components',
                                                name: 'gridTable',
                                                options: {
                                                    cssClass: null,
                                                    margin: {
                                                        top: null,
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    padding: {
                                                        top: null,
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    textStyling: null
                                                },
                                                scope: null
                                            }
                                        ]
                                    },
                                    scope: null
                                }
                            },
                            scope: null
                        }
                    },
                    contentOptions: {
                        'textBlock-gxlgpmstllxkoouk': {
                            text: 'Overview'
                        }
                    }
                },
                scope: null
            }
        ],
        cssClass: null,
        margin: {
            top: '10px',
            right: null,
            bottom: null,
            left: null
        },
        padding: {
            top: null,
            right: '10px',
            bottom: null,
            left: '10px'
        },
        textStyling: null
    },
    scope: undefined
};

export const demoOverviewRelations: RelationsNodeMetadata[] =
[
    {
        id: 'value-ywtxfzqjprvesujp',
        name: 'value',
        package: 'basic-components',
        relationsOptions: {
            value: {
                name: '',
                surname: '',
                email: ''
            }
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 199,
                y: 463
            },
            options: null
        },
        outputs: [
            {
                outputName: 'value',
                inputs: [
                    {
                        id: 'trigger-nuqofphqgonmtlxn',
                        inputName: 'Data'
                    }
                ]
            }
        ]
    },
    {
        id: 'rest-flemahafjynqojjr',
        name: 'rest',
        package: 'rest-components',
        relationsOptions: {
            url: 'data/users.json',
            method: 'GET',
            runImmediately: true,
            params: [
                {
                    configurable: true,
                    name: 'filter',
                    type: 'QUERY OBJECT',
                    value: null
                }
            ]
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 796,
                y: 42
            },
            options: null
        },
        outputs: [
            {
                outputName: 'success',
                inputs: [
                    {
                        id: 'gridTable-gbusssjqutylctyh',
                        inputName: 'data'
                    }
                ]
            },
            {
                outputName: 'error',
                inputs: []
            }
        ]
    },
    {
        id: 'formBlock-gpjxpdbhjxcjptol',
        name: 'formBlock-gpjxpdbhjxcjptol',
        package: 'layout-components',
        displayName: 'form',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: false,
            coordinates: {
                x: 181,
                y: 80
            },
            options: null
        },
        scope: '',
        outputs: [
            {
                outputName: 'value',
                inputs: [
                    {
                        id: 'trigger-qibvuhjlhkwsrmkx',
                        inputName: 'Data'
                    }
                ]
            },
            {
                outputName: 'submit',
                inputs: [
                    {
                        id: 'trigger-qibvuhjlhkwsrmkx',
                        inputName: 'trigger'
                    }
                ]
            }
        ]
    },
    {
        id: 'gridTable-gbusssjqutylctyh',
        name: 'gridTable-gbusssjqutylctyh',
        package: 'layout-components',
        displayName: 'grid',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: false,
            coordinates: {
                x: 928,
                y: 388
            },
            options: null
        },
        scope: '',
        outputs: []
    },
    {
        id: 'button-refwsolywgnznhbv',
        name: 'button-refwsolywgnznhbv',
        package: 'layout-components',
        displayName: 'button-refresh',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: false,
            coordinates: {
                x: 156,
                y: 284
            },
            options: null
        },
        outputs: [
            {
                outputName: 'click',
                inputs: [
                    {
                        id: 'trigger-nuqofphqgonmtlxn',
                        inputName: 'trigger'
                    }
                ]
            }
        ]
    },
    {
        id: 'trigger-qibvuhjlhkwsrmkx',
        name: 'trigger',
        package: 'basic-components',
        relationsOptions: {
            endpoints: [
                {
                    name: 'Data',
                    defaultValue: null,
                    skipInit: true,
                    allowSkipInit: true
                }
            ]
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 477,
                y: 77
            },
            options: null
        },
        outputs: [
            {
                outputName: 'Data',
                inputs: [
                    {
                        id: 'rest-flemahafjynqojjr',
                        inputName: 'filter'
                    }
                ]
            }
        ]
    },
    {
        id: 'trigger-nuqofphqgonmtlxn',
        name: 'trigger',
        package: 'basic-components',
        relationsOptions: {
            endpoints: [
                {
                    name: 'Data',
                    defaultValue: null,
                    skipInit: true,
                    allowSkipInit: true
                }
            ]
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 422,
                y: 372
            },
            options: null
        },
        outputs: [
            {
                outputName: 'Data',
                inputs: [
                    {
                        id: 'formBlock-gpjxpdbhjxcjptol',
                        inputName: 'value'
                    }
                ]
            }
        ]
    }
];

export const demoDetailLayout: LayoutComponentMetadata =
{
    id: 'stackPanel-ajqeywbjqh',
    displayName: 'root',
    package: 'basic-components',
    name: 'stackPanel',
    options: {
        children: [
            {
                id: 'styleBlock-gdmcpijvblrtyjls',
                displayName: 'styleBlock-gdmcpijvblrtyjls',
                package: 'css-components',
                name: 'styleBlock',
                options: {
                    content: {
                        id: 'stackPanel-xxptnrqmuiwyhqiw',
                        displayName: 'stackPanel-xxptnrqmuiwyhqiw',
                        package: 'basic-components',
                        name: 'stackPanel',
                        options: {
                            children: [
                                {
                                    id: 'textBlock-myngknoigkbwelkn',
                                    displayName: 'textBlock-myngknoigkbwelkn',
                                    package: 'basic-components',
                                    name: 'textBlock',
                                    options: {
                                        text: 'Detail',
                                        cssClass: 'title',
                                        margin: {
                                            top: null,
                                            right: null,
                                            bottom: null,
                                            left: null
                                        },
                                        padding: {
                                            top: null,
                                            right: null,
                                            bottom: null,
                                            left: null
                                        },
                                        textStyling: null
                                    },
                                    scope: null
                                },
                                {
                                    id: 'stackPanel-ehlcpfegubheevch',
                                    displayName: 'stackPanel-ehlcpfegubheevch',
                                    package: 'basic-components',
                                    name: 'stackPanel',
                                    options: {
                                        horizontal: true,
                                        wrap: false,
                                        children: []
                                    },
                                    scope: null
                                }
                            ]
                        },
                        scope: null
                    },
                    style: '.title\r\n{\r\n    fontsiz: 1.3em;\r\n    fontweigh: 500;\r\n    marginbotto: 15px;\r\n    marginlef: 4px;\r\n}\r\n\r\nform-textfielnot:last-child)\r\n{\r\n    marginrigh: 10px;\r\n}\r\n\r\nform-text-field>label\r\n{\r\n   displa: block;\r\n}\r\n\r\nform-text-field>input\r\n{\r\n    borderradiu: 4px;\r\n    borderstyl: solid;\r\n    borderwidt: 1px;\r\n    boxshado: none;\r\n    fontsiz: 12px;  \r\n    paddinglef: 7px;\r\n   widt: 100%;\r\n    fontfamil: "Inter";\r\n}\r\n\r\ntable\r\n{\r\n   widt: 100%;\r\n}'
                },
                scope: null
            }
        ],
        cssClass: null,
        margin: {
            top: '10px',
            right: null,
            bottom: null,
            left: null
        },
        padding: {
            top: null,
            right: '10px',
            bottom: null,
            left: '10px'
        },
        textStyling: null
    },
    scope: undefined
};

export const demoHomeLayout: LayoutComponentMetadata =
{
    id: 'stackPanel-fbfrmtqpgk',
    displayName: 'root',
    package: 'basic-components',
    name: 'stackPanel',
    options: {
        children: [
            {
                id: 'page-nkrqdatwzxiswwwr',
                displayName: 'page-nkrqdatwzxiswwwr',
                package: 'custom-components',
                name: 'page',
                options: {
                    name: 'page',
                    placeholderContainers: 
                    {
                        'placeholder-tejvzbsnwwjjirhu': 
                        {
                            id: 'placeholderContainer-page-nkrqdatwzxiswwwr-placeholder-tejvzbsnwwjjirhu',
                            name: 'placeholderContainer',
                            package: 'custom-components',
                            displayName: 'placeholderContainer-page-nkrqdatwzxiswwwr-placeholder-tejvzbsnwwjjirhu',
                            options: {
                                content: {
                                    id: 'stackPanel-dqjrotckyjgphtrv',
                                    displayName: 'stackPanel-dqjrotckyjgphtrv',
                                    package: 'basic-components',
                                    name: 'stackPanel',
                                    options: {
                                        children: [
                                            {
                                                id: 'routerLink-ftmvafttlpurslfn',
                                                displayName: 'routerLink-ftmvafttlpurslfn',
                                                package: 'sample-components',
                                                name: 'routerLink',
                                                options: {
                                                    text: 'Dynamic overview',
                                                    disabled: false,
                                                    linkCssClass: null,
                                                    link: '/overview',
                                                    cssClass: 'tile-link',
                                                    margin: {
                                                        top: '10px',
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    padding: {
                                                        top: null,
                                                        right: null,
                                                        bottom: null,
                                                        left: null
                                                    },
                                                    textStyling: null
                                                },
                                                scope: null
                                            }
                                        ]
                                    },
                                    scope: null
                                }
                            },
                            scope: null
                        }
                    },
                    contentOptions: 
                    {
                        'textBlock-gxlgpmstllxkoouk': {
                            text: 'Home',
                        }
                    },
                },
                scope: null
            }
        ]
    },
    scope: undefined
};

export const demoDetailResolverRelations: RelationsNodeMetadata[] =
[
    {
        id: 'dynamic-data-resolver',
        name: 'dynamic-data-resolver',
        package: 'static-components',
        displayName: 'dynamic-data-resolver',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: false,
            coordinates: {
                x: 1124,
                y: 264
            },
            options: null
        },
        outputs: []
    },
    {
        id: 'activated-route-snapshot',
        name: 'activated-route-snapshot',
        package: 'static-components',
        displayName: 'activated-route-snapshot',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: false,
            coordinates: {
                x: 77,
                y: 142
            },
            options: null
        },
        outputs: [
            {
                outputName: 'params',
                inputs: [
                    {
                        id: 'deconstruct-ywmdlvrjswriangk',
                        inputName: 'object'
                    }
                ]
            },
            {
                outputName: 'queryParams',
                inputs: []
            },
            {
                outputName: 'fragment',
                inputs: []
            },
            {
                outputName: 'data',
                inputs: []
            }
        ]
    },
    {
        id: 'rest-qbheoqdbjnfbgbmy',
        name: 'rest',
        package: 'rest-components',
        relationsOptions: {
            url: 'data/user-{id}.json',
            method: 'GET',
            runImmediately: true,
            params: [
                {
                    configurable: true,
                    name: 'id',
                    type: 'PATH',
                    value: null
                }
            ]
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 752,
                y: 62
            },
            options: null
        },
        outputs: [
            {
                outputName: 'success',
                inputs: [
                    {
                        id: 'dynamic-data-resolver',
                        inputName: 'data'
                    }
                ]
            },
            {
                outputName: 'error',
                inputs: []
            }
        ]
    },
    {
        id: 'deconstruct-ywmdlvrjswriangk',
        name: 'deconstruct',
        package: 'basic-components',
        relationsOptions: {
            properties: [
                {
                    name: 'id',
                    noDefaultValue: true,
                    skipInit: false,
                    allowSkipInit: true,
                    defaultValue: null
                }
            ]
        },
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 420,
                y: 252
            },
            options: null
        },
        outputs: [
            {
                outputName: 'id',
                inputs: [
                    {
                        id: 'rest-qbheoqdbjnfbgbmy',
                        inputName: 'id'
                    }
                ]
            }
        ]
    }
];