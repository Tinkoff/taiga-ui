import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import type {TuiDecimalMode} from '@taiga-ui/core';
import {TuiNumberFormatDirective, tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/legacy';
import {TuiNativeInputPO} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('InputNumber - backward compatibility for separators', () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    formControlName="control"
                    [tuiNumberFormat]="{decimalMode, precision}"
                ></tui-input-number>
            </ng-container>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        public component!: TuiInputNumberComponent;

        public control = new FormControl(12345.0);
        public form = new FormGroup({control: this.control});

        public decimalMode: TuiDecimalMode = 'always';
        public precision = 2;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let inputPO: TuiNativeInputPO;

    describe('Format - {d d d,d}', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiNumberFormatDirective,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                providers: [NG_EVENT_PLUGINS],
                declarations: [TestComponent],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();

            inputPO = new TuiNativeInputPO(
                fixture,
                'tui-primitive-textfield__native-input',
            );
        });

        it('comma usage', () => {
            inputPO.sendText('55666,7777');
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            inputPO.sendText('55666.7777');
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d,d,d.d}', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    TuiNumberFormatDirective,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiNumberFormatProvider({
                        decimalSeparator: '.',
                        thousandSeparator: ',',
                    }),
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                'tui-primitive-textfield__native-input',
            );
        });

        it('comma usage', () => {
            inputPO.sendText('556,667,777');
            inputPO.focus();

            expect(component.computedValue).toBe('556,667,777.00');
        });

        it('dot usage', () => {
            inputPO.sendText('556,667,777.99');
            inputPO.focus();

            expect(component.computedValue).toBe('556,667,777.99');
        });
    });
});
