import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map, of, startWith, switchMap} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';
import {assets} from '#/demo/utils';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly avatarUrl: string | null = null,
        public readonly disabled = false,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const DATA: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
    new User('Gabriel José', 'de la Concordia «Gabo» García Márquez'),
];

@Component({
    selector: 'tui-input-example-8',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputExample8 {
    protected readonly control = new FormControl('');

    protected firstName = '';
    protected lastName = '';

    protected readonly items$ = this.control.valueChanges.pipe(
        startWith(''),
        switchMap(value =>
            this.request(value ?? '').pipe(
                map(response => {
                    if (response.length === 1 && String(response[0]) === value) {
                        this.onClick(response[0]);

                        return [];
                    }

                    return response;
                }),
            ),
        ),
        startWith(DATA),
    );

    protected onClick({lastName, firstName}: User): void {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    // Request imitation
    private request(query: string): Observable<readonly User[]> {
        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));
    }
}
