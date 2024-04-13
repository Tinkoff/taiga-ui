import type {AfterViewInit} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-elastic-sticky-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiElasticStickyExample1 implements AfterViewInit {
    @ViewChild(TuiElasticStickyDirective)
    protected readonly elasticSticky?: TuiElasticStickyDirective;

    protected scale$?: Observable<number>;

    public ngAfterViewInit(): void {
        if (!this.elasticSticky) {
            return;
        }

        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(
            map(scale => tuiClamp(scale, 0.5, 1)),
            startWith(1),
            distinctUntilChanged(),
        );
    }
}
