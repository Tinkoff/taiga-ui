import {inject, Injectable, DestroyRef} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {Observable} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    of,
    shareReplay,
    startWith,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';

import {databaseMockData} from './database-mock-data';
import type {User} from './user';

@Injectable()
export class RequestService {
    private readonly destroyRef = inject(DestroyRef);
    private readonly request$ = new Subject<string>();

    // Imitating server request with switchMap + delay pair
    private readonly response$ = this.request$.pipe(
        distinctUntilChanged(),
        switchMap(query =>
            of(databaseMockData.filter(user => TUI_DEFAULT_MATCHER(user, query))).pipe(
                delay(Math.random() * 1000 + 500),
                startWith(null),
            ),
        ),
        takeUntilDestroyed(),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    public request(query: string | null): Observable<readonly User[] | null> {
        this.request$.next(query || '');

        return this.response$;
    }
}
