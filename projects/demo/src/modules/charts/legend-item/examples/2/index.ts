import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure, tuiSum} from '@taiga-ui/cdk';
import {TuiAlertService, tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: 'tui-legend-item-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLegendItemExample2 {
    private readonly alerts = inject(TuiAlertService);
    private enabled = new Array(5).fill(true);

    protected readonly data = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.data);
    protected readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    public get value(): readonly number[] {
        return this.getValue(this.data, this.enabled);
    }

    public isEnabled(index: number): boolean {
        return this.enabled[index];
    }

    public toggle(index: number): void {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    public onClick(index: number): void {
        if (this.isEnabled(index)) {
            this.alerts
                .open(`Category spending: ${tuiFormatNumber(this.data[index])} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    public getColor(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getValue(
        data: readonly number[],
        enabled: readonly number[],
    ): readonly number[] {
        return data.map((value, index) => (enabled[index] ? value : 0));
    }
}
