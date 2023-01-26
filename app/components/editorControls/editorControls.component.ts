import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef, Optional, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {GoBackModule, TooltipModule} from '@anglr/common';
import {AuthorizationModule} from '@anglr/authentication';
import {TitledDialogService} from '@anglr/common/material';
import {ShowCustomComponentOptionsSADirective} from '@anglr/dynamic/layout-relations';
import {LiveEventService} from '@anglr/dynamic/layout-editor';
import {CodeEditorDialogComponent, CodeEditorDialogData, CodeEditorContent, JsonLanguageModel, MetadataHistoryManager, EditorHotkeys} from '@anglr/dynamic';
import {GlobalNotificationsService} from '@anglr/notifications';
import {isPresent} from '@jscrpt/common';
import {lastValueFrom, Subscription} from 'rxjs';

/**
 * Component that represents editor controls
 */
@Component(
{
    selector: 'editor-controls',
    templateUrl: 'editorControls.component.html',
    standalone: true,
    imports:
    [
        CommonModule,
        GoBackModule,
        TooltipModule,
        AuthorizationModule,
        ShowCustomComponentOptionsSADirective,
        MatSlideToggleModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorControlsSAComponent<TMetadata = any> implements OnInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscriptions created during initialization
     */
    private _initSubscriptions: Subscription = new Subscription();

    //######################### public properties - inputs #########################

    /**
     * Metadata that are currently edited
     */
    @Input()
    public metadata: TMetadata|null = null;

    /**
     * Metadata history manager for handling metadata history
     */
    @Input()
    public history: MetadataHistoryManager|null = null;

    /**
     * Indication whether are these controls for custom component
     */
    @Input()
    public customComponent: boolean = false;

    /**
     * Id of custom component that is being edited, used with customComponent
     */
    @Input()
    public customComponentId: string = '';

    //######################### public properties - outputs #########################

    /**
     * Occurs when metadata changes from inside
     */
    @Output()
    public metadataChange: EventEmitter<TMetadata> = new EventEmitter<TMetadata>();

    /**
     * Occurs when save of metadata was requested
     */
    @Output()
    public save: EventEmitter<void> = new EventEmitter<void>();

    //######################### constructor #########################
    constructor(private _changeDetector: ChangeDetectorRef,
                private _dialog: TitledDialogService,
                private _notifications: GlobalNotificationsService,
                @Optional() protected liveEvents?: LiveEventService,
                @Optional() private _hotkeys?: EditorHotkeys,)
    {
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public ngOnInit(): void
    {
        if(this._hotkeys)
        {
            this._initSubscriptions.add(this._hotkeys.save.subscribe(() => this.saveMetadata()));
        }

        if(this.history)
        {
            this._initSubscriptions.add(this.history.historyChange.subscribe(() => this._changeDetector.detectChanges()));
            this._initSubscriptions.add(this.history.pop.subscribe(() => this._changeDetector.detectChanges()));
        }
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy(): void
    {
        this._initSubscriptions.unsubscribe();
    }

    //######################### protected methods - template bindings #########################

    /**
     * Edits metadata as json string
     */
    protected async editMetadata(): Promise<void>
    {
        const result = await lastValueFrom(this._dialog.open<CodeEditorDialogComponent, CodeEditorDialogData, CodeEditorContent|null>(CodeEditorDialogComponent,
        {
            title: 'Import metadata',
            width: '75vw',
            height: '75vh',
            data: 
            {
                content: JSON.stringify(this.metadata, null, 4),
                languageModel: JsonLanguageModel,

            }
        }).afterClosed());

        if(isPresent(result))
        {
            try
            {
                this.metadata = JSON.parse(result.content);

                if(this.metadata)
                {
                    this.metadataChange.emit(this.metadata);
                    this.history?.getNewState();
                    this.history?.save();
                }
            }
            catch(e)
            {
                this._notifications.error(`Failed to parse json ${e}`);
            }
        }
    }

    /**
     * Saves metadata
     */
    protected saveMetadata(): void
    {
        this.save.emit();
        this.history?.save();
    }
}