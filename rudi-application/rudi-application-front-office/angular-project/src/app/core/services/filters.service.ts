import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Filters} from '../../shared/models/filters';
import {ProducerNamesFilter} from './filters/producer-names-filter';
import {DEFAULT_VALUE as DEFAULT_ORDER_VALUE, OrderFilter} from './filters/order-filter';
import {debounceTime} from 'rxjs/operators';
import {SearchFilter} from './filters/search-filter';
import {ThemesFilter} from './filters/themes-filter';
import {AccessStatusFilter} from './filters/access-status-filter';
import {DatesFilter} from './filters/dates-filter';

const EMPTY_FILTERS: Filters = {
    search: '',
    themes: [],
    keywords: [],
    producerNames: [],
    dates: {
        debut: '',
        fin: ''
    },
    order: DEFAULT_ORDER_VALUE,
    accessStatus: null,
    globalIds: [],
    producerUuid: '',
};

@Injectable({
    providedIn: 'root'
})
export class FiltersService {

    private readonly filters = new BehaviorSubject<Filters>(EMPTY_FILTERS);
    readonly filter$ = this.filters.asObservable().pipe(
        debounceTime(10) // Wait 10ms to avoid multiple backend requests at the same time
    );
    readonly searchFilter = new SearchFilter(this, this.filters);
    readonly themesFilter = new ThemesFilter(this, this.filters);
    readonly producerNamesFilter = new ProducerNamesFilter(this, this.filters);
    readonly datesFilter = new DatesFilter(this, this.filters);
    readonly orderFilter = new OrderFilter(this, this.filters);
    readonly accessStatusFilter = new AccessStatusFilter(this, this.filters);
    private readonly filtersBackups: Filters[] = [];
    private readonly childrenFilters = [
        this.searchFilter,
        this.themesFilter,
        this.producerNamesFilter,
        this.datesFilter,
        this.orderFilter,
        this.accessStatusFilter
    ];

    get currentFilters(): Filters {
        return this.filters.value;
    }

    get isFiltered(): boolean {
        return this.childrenFilters.some(childFilter => childFilter.active);
    }

    deleteAllFilters(): void {
        this.childrenFilters.forEach(childFilter => childFilter.clear());
    }

    /**
     * Backup and delete all filters
     * @see deleteAllFilters
     * @see restoreFilters
     */
    backupFilters(): void {
        this.filtersBackups.push(this.currentFilters);
        this.deleteAllFilters();
    }

    /**
     * Restore previous filters backup
     * @see backupFilters
     */
    restoreFilters(): void {
        const previousFilters: Filters = this.filtersBackups.pop();
        this.filters.next(previousFilters);
    }
}
