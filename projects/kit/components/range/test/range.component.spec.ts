import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRootModule} from '@taiga-ui/core';
import {createKeyboardEvent, PageObject} from '@taiga-ui/testing';

import {TuiRangeComponent} from '../range.component';
import {TuiRangeModule} from '../range.module';

describe('Range', () => {
    @Component({
        template: `
            <tui-root>
                <tui-range
                    [formControl]="testValue"
                    [max]="max"
                    [min]="min"
                    [steps]="steps"
                    [segments]="segments"
                    [quantum]="quantum"
                ></tui-range>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiRangeComponent, {static: true})
        component!: TuiRangeComponent;

        @ViewChild(TuiRangeComponent, {static: true, read: ElementRef})
        elementRef!: ElementRef<HTMLElement>;

        testValue = new FormControl([3, 5]);
        max = 11;
        min = 1;
        segments = 10;
        steps = 10;
        quantum = 0;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const keydownArrowLeft = createKeyboardEvent('ArrowLeft', 'keydown');
    const keydownArrowRight = createKeyboardEvent('ArrowRight', 'keydown');
    const testContext = {
        get prefix() {
            return 'tui-range__';
        },
    };

    function getLeft(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}left`)!.nativeElement;
    }

    function getRight(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}right`)!.nativeElement;
    }

    function getFilledRangeOffeset(): {left: string; right: string} {
        const computedStyles = testComponent.elementRef.nativeElement;

        return {
            left: getComputedStyle(computedStyles).getPropertyValue('--left'),
            right: getComputedStyle(computedStyles).getPropertyValue('--right'),
        };
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiRootModule, TuiRangeModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('The bar is filled from 20% to 40%', () => {
        expect(getFilledRangeOffeset().left).toBe('20%');
        expect(getFilledRangeOffeset().right).toBe('60%');
    });

    describe('Changing values', () => {
        describe('Left point', () => {
            it('Pressing the left arrow decreases the value by one step', () => {
                getLeft().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(2);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Pressing the right arrow increases the value by one step', () => {
                getLeft().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(4);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Pressing the left arrow correctly paints the strip', () => {
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe('10%');
                expect(getFilledRangeOffeset().right).toBe('60%');
            });

            it('Pressing the right arrow correctly paints the strip', () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe('30%');
                expect(getFilledRangeOffeset().right).toBe('60%');
            });
        });

        describe('Right point', () => {
            it('Pressing the left arrow decreases the value by one step', () => {
                getRight().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(4);
            });

            it('Pressing the right arrow increases the value by one step', () => {
                getRight().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(6);
            });

            it('Pressing the left arrow correctly paints the strip', () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe('20%');
                expect(getFilledRangeOffeset().right).toBe('70%');
            });

            it('Pressing the right arrow correctly paints the strip', () => {
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe('20%');
                expect(getFilledRangeOffeset().right).toBe('50%');
            });
        });

        describe('Borders', () => {
            it('Prevents the left border from exceeding the right', () => {
                testComponent.testValue.setValue([5, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(5);
            });

            it('Prevents the right border from dropping below the left', () => {
                testComponent.testValue.setValue([5, 5]);
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Prevents the value from decreasing below the minimum', () => {
                testComponent.testValue.setValue([1, 11]);
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1);
            });

            it('Prevents the value from exceeding the maximum', () => {
                testComponent.testValue.setValue([1, 11]);
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(11);
            });

            it('Adds a value to the closest allowed step', () => {
                testComponent.testValue.setValue([3.3, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(4);
            });
        });

        describe('Quantum', () => {
            beforeEach(() => {
                testComponent.min = 0;
                testComponent.max = 10;
                testComponent.quantum = 0.1;
                testComponent.steps = 0;
                testComponent.testValue.setValue([1, 5]);
                fixture.detectChanges();
            });

            it('Pressing the right arrow without specified steps increases the value by one quantum', () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1.1);
            });

            it('Pressing the left arrow without specified steps decreases the value by one step', () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(4.9);
            });

            it('Adds a value to the closest allowed step and round to the closest quantum', () => {
                testComponent.testValue.setValue([0, 10]);
                testComponent.quantum = 1;
                testComponent.steps = 3;
                fixture.detectChanges();

                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(3);
            });
        });
    });
});
