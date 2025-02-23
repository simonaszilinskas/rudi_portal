import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {KonsultMetierService, MAX_RESULTS_PER_PAGE} from '../../../core/services/konsult-metier.service';
import {BreakpointObserverService, MediaSize, NgClassObject} from '../../../core/services/breakpoint-observer.service';
import {Observable, Subject} from 'rxjs';
import {OrderValue} from '../../../core/services/filters/order-filter';
import {SimpleSkosConcept} from '../../../kos/kos-model';
import {Item} from '../filter-forms/array-filter-form.component';
import {Metadata, MetadataList} from '../../../api-kaccess';
import {FiltersService} from '../../../core/services/filters.service';
import {SidenavOpeningsService} from '../../../core/services/sidenav-openings.service';
import {ThemeCacheService} from '../../../core/services/theme-cache.service';
import {takeUntil} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {AccessStatusFilterItem} from '../filter-forms/access-status-filter-form/access-status-filter-form.component';

const FIRST_PAGE = 1;
const EMPTY_METADATA_LIST: MetadataList = {
    total: 0,
    items: []
};

@Component({
    selector: 'app-list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit, OnDestroy {
    @ViewChild('sidenav') sidenav: MatSidenav;
    @Input() orders: OrderValue[];
    @Input() mediaSize: MediaSize;
    @Input() hidePagination = false;
    @Input() limit = MAX_RESULTS_PER_PAGE;
    /**
     * Set fixed number of cards to be displayed in a row.
     * maximum = 12 (current limit in SCSS rule : .data-set-container-*-cards).
     * Default : automatic (based on screen width).
     */
    @Input() resultsPerRow: number | undefined;
    @Input() accessStatusForcedValue;
    @Input() accessStatusHiddenValues;
    /** On peut sélectionner une carte dans la liste ? */
    @Input() isSelectable = false;
    @Output() selectMetadata = new EventEmitter<Metadata>();
    @Output() dbSelectMetadata = new EventEmitter<Metadata>();
    offset = 0;
    // Indique si on affiche le loader pendant le chargement es JDD
    public isLoading = false;
    metadataList = EMPTY_METADATA_LIST;
    searchIsRunning = false;
    searche$: Observable<string>;
    metadataListTotal: number;
    get themes(): SimpleSkosConcept[] {
        return this.themeCacheService.themes;
    }

    producerNames: string[];
    selectedDatesItems: Item[] = [];
    selectedThemeItems: Item[] = [];
    selectedProducerItems: Item[] = [];

    selectedAccessStatusItems: AccessStatusFilterItem[] = [];
    private isDestroyed$ = new Subject<void>();

    constructor(
        private readonly konsultMetierService: KonsultMetierService,
        private readonly router: Router,
        private readonly translateService: TranslateService,
        private readonly filtersService: FiltersService,
        private readonly breakpointObserver: BreakpointObserverService,
        private readonly sidenavOpeningsService: SidenavOpeningsService,
        private readonly themeCacheService: ThemeCacheService,
    ) {
        this.searche$ = this.filtersService.searchFilter.value$;
    }

    get isFiltered(): boolean {
        return this.filtersService.isFiltered;
    }

    get hasSelectedItems(): boolean {
        return (
            this.selectedDatesItems?.length > 0 ||
            this.selectedAccessStatusItems?.length > 0 ||
            this.selectedProducerItems?.length > 0 ||
            this.selectedThemeItems?.length > 0
        );
    }

    /**
     * @return ne renvoie jamais null (obligatoire pour le pipe paginate)
     */
    get metadataListItems(): Metadata[] {
        return this.metadataList.items ?? [];
    }

    openSidenav(): void {
        this.sidenavOpeningsService.openSidenav();
    }

    ngOnDestroy(): void {
        this.isDestroyed$.next();
    }

    ngOnInit(): void {
        this.mediaSize = this.breakpointObserver.getMediaSize();
        this.sidenavOpeningsService.sideNavOpening$.pipe(takeUntil(this.isDestroyed$)).subscribe(() => {
            this.sidenav.open();
        });
        this.konsultMetierService.getProducerNames().subscribe(
            producerNames => this.producerNames = producerNames
        );
    }

    getThemeLabelFor(metadata: Metadata): string {
        return this.themeCacheService.getThemeLabelFor(metadata);
    }

    getMetadataListTotal($event: number): void {
        this.metadataListTotal = $event;
    }
}
