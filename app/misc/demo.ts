import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';

import {DynamicRoute} from '../services/dynamicRoutes';

export const demoOverviewRoute: DynamicRoute = 
{
    module: '',
    path: 'overview',
    permission: null,
    withResolver: false,
    resolverRelations: null,
    template: 'overview'
};

export const demoDetailRoute: DynamicRoute =
{

    module: '',
    path: 'detail/:id',
    permission: null,
    withResolver: false,
    resolverRelations: null,
    template: 'detail'
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
                                        text: 'Overview',
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
                    },
                    style: '.title\r\n{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    margin-left: 4px;\r\n}\r\n\r\nform-text-field:not(:last-child)\r\n{\r\n    margin-right: 10px;\r\n}\r\n\r\nform-text-field>label\r\n{\r\n   display: block;\r\n}\r\n\r\nform-text-field>input\r\n{\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    box-shadow: none;\r\n    font-size: 12px;  \r\n    padding-left: 7px;\r\n   width: 100%;\r\n    font-family: "Inter";\r\n}\r\n\r\ntable\r\n{\r\n   width: 100%;\r\n}'
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
        id: 'triggerData-teboilptsulagtbq',
        name: 'triggerData',
        package: 'sample-components',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 468,
                y: 79
            },
            options: null
        },
        outputs: [
            {
                outputName: 'data',
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
                        id: 'triggerData-fyyutwhwylmcihjw',
                        inputName: 'data'
                    }
                ]
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
                        id: 'triggerData-teboilptsulagtbq',
                        inputName: 'data'
                    }
                ]
            },
            {
                outputName: 'submit',
                inputs: [
                    {
                        id: 'triggerData-teboilptsulagtbq',
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
                x: 859,
                y: 386
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
                x: 162,
                y: 295
            },
            options: null
        },
        scope: undefined,
        outputs: [
            {
                outputName: 'click',
                inputs: [
                    {
                        id: 'triggerData-fyyutwhwylmcihjw',
                        inputName: 'trigger'
                    }
                ]
            }
        ]
    },
    {
        id: 'triggerData-fyyutwhwylmcihjw',
        name: 'triggerData',
        package: 'sample-components',
        relationsOptions: {},
        nodeMetadata: {
            scopeConfigurable: true,
            coordinates: {
                x: 468,
                y: 326
            },
            options: null
        },
        outputs: [
            {
                outputName: 'data',
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