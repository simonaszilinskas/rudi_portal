import {Component, Input, OnInit} from '@angular/core';

/**
 * Séparateur avec 2 traits horizontaux et un label au milieu
 */
@Component({
    selector: 'app-label-separator',
    templateUrl: './label-separator.component.html',
    styleUrls: ['./label-separator.component.scss']
})
export class LabelSeparatorComponent implements OnInit {

    /**
     * le texte au milieu du séparateur
     */
    @Input()
    public text: string;

    /**
     * Constructeur
     */
    constructor() {}

    ngOnInit(): void {}
}
