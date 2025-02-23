import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
    /**
     * Cache ou non le password
     */
    @Input() hidePassword: boolean;
    /**
     * label du password
     */
    @Input() label: string;
    /**
     * Emitter du password
     */
    @Output() passwordEmitter: EventEmitter<string> = new EventEmitter<string>();
    /**
     * Mot de passe
     */
    password: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    /**
     * Méthode qui renvoie le password entré par l'utilisateur au composant parent
     */
    emitPassword(): void {
        this.passwordEmitter.emit(this.password);
    }
}
