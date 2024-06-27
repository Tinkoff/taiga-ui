import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {WINDOW} from '@ng-web-apis/common';
import {take} from 'rxjs';

import {TuiDarkThemeService} from '../dark-theme.service';

describe('TuiDarkThemeService', () => {
    const mock: HTMLDivElement = document.createElement('div');
    let service!: TuiDarkThemeService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WINDOW,
                    useValue: {
                        matchMedia(): unknown {
                            return mock;
                        },
                    },
                },
            ],
        });
        await TestBed.compileComponents();
        service = TestBed.inject(TuiDarkThemeService);
        mock.matches = true as any;
    });

    it('returns actual value', () => {
        let value = false;

        service.pipe(take(1)).subscribe(v => {
            value = v;
        });

        expect(value).toBe(true);
    });

    it('fires upon refresh', () => {
        let value = false;

        service.pipe(take(2)).subscribe(v => {
            value = v;
        });

        mock.matches = false as any;
        mock.dispatchEvent(new Event('change'));

        expect(value).toBe(false);
    });
});
