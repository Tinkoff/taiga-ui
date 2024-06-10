import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListDirective, TuiRootComponent} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit/components';
import {
    TUI_ARROW_MODE,
    TuiMultiSelectComponent,
    TuiMultiSelectModule,
} from '@taiga-ui/legacy';
import {TUI_SANITIZER_MOCK, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('MultiSelect', () => {
    describe('Basic', () => {
        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: TuiPageObject<TestComponent>;
        let inputPO: TuiNativeInputPO;

        class User {
            constructor(
                public readonly firstName: string,
                public readonly lastName: string,
                public readonly id: string,
            ) {}

            public toString(): string {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        const items = [
            new User('Marsi', 'Barsi', '0'),
            new User('Water', 'Plea', '2'),
            new User('Alexander', 'Inkin', '3'),
        ];

        @Component({
            standalone: true,
            imports: [
                TuiRootComponent,
                TuiMultiSelectModule,
                ReactiveFormsModule,
                TuiDataListWrapperComponent,
                TuiDataListDirective,
            ],
            template: `
                <tui-root>
                    <tui-multi-select
                        [formControl]="control"
                        [readOnly]="readOnly"
                    >
                        <tui-data-list-wrapper
                            *tuiDataList
                            automation-id="tui-multi-select__menu"
                            [items]="items"
                        ></tui-data-list-wrapper>
                    </tui-multi-select>
                </tui-root>
            `,
        })
        class TestComponent {
            @ViewChild(TuiMultiSelectComponent, {static: true})
            public component!: TuiMultiSelectComponent<User>;

            public items = items;

            public control = new FormControl([items[0]]);

            public readOnly = false;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestComponent],
                providers: [TUI_SANITIZER_MOCK, NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new TuiPageObject(fixture);
            testComponent = fixture.componentInstance;

            inputPO = new TuiNativeInputPO(fixture, 'tui-input-tag__native');
            fixture.detectChanges();
        });

        describe('Field', () => {
            describe('when you click on it', () => {
                beforeEach(() => {
                    // Focus happens before click, after mousedown
                    inputPO.focus();
                });

                describe('opens the dropdown', () => {
                    it('on click', () => {
                        getInputTag(pageObject).nativeElement.click();
                        fixture.detectChanges();

                        expect(getDropdown(pageObject)).not.toBeNull();
                    });

                    it('on search', () => {
                        inputPO.sendText('Marsi');

                        expect(getDropdown(pageObject)).not.toBeNull();
                    });
                });

                describe('does not open the dropdown', () => {
                    it('in readOnly mode', () => {
                        testComponent.readOnly = true;
                        fixture.detectChanges();
                        getInputTag(pageObject).nativeElement.click();
                        fixture.detectChanges();

                        expect(getDropdown(pageObject)).toBeNull();
                    });

                    it('if control is disabled', () => {
                        testComponent.control.disable();
                        fixture.detectChanges();
                        getInputTag(pageObject).nativeElement.click();
                        fixture.detectChanges();

                        expect(getDropdown(pageObject)).toBeNull();
                    });

                    it('on empty search', () => {
                        testComponent.component.onSearch('');
                        fixture.detectChanges();

                        expect(getDropdown(pageObject)).toBeNull();
                    });
                });
            });
        });

        describe('Arrow', () => {
            beforeEach(() => {
                inputPO.focus();
            });

            it('Click on the arrow to open the dropdown', () => {
                getArrow(pageObject)?.nativeElement.click();
                fixture.detectChanges();

                expect(getDropdown(pageObject)).not.toBeNull();
            });

            it('Clicking the arrow again closes the dropdown', () => {
                getArrow(pageObject)?.nativeElement.click();
                fixture.detectChanges();
                getArrow(pageObject)?.nativeElement.click();
                fixture.detectChanges();

                expect(getDropdown(pageObject)).toBeNull();
            });

            it('There is exists interactive arrow in readOnly mode', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                expect(getArrow(pageObject)?.nativeElement).toBeTruthy();
            });

            it('In disabled mode there is interactive arrow exists', () => {
                testComponent.control.disable();
                fixture.detectChanges();

                expect(getArrow(pageObject)?.nativeElement).toBeTruthy();
            });
        });

        describe('Keyboard', () => {
            beforeEach(() => {
                inputPO.focus();
            });

            it('Down arrow opens a dropdown', () => {
                inputPO.sendKeydown('ArrowDown');
                fixture.detectChanges();

                expect(getDropdown(pageObject)).not.toBeNull();
            });

            it('Esc closes the dropdown', () => {
                inputPO.sendKeydown('ArrowDown');
                fixture.detectChanges();
                inputPO.sendKeydown('Escape');
                fixture.detectChanges();

                expect(getDropdown(pageObject)).toBeNull();
            });

            it('Down arrow does not open dropdown in readOnly mode', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('ArrowDown');
                fixture.detectChanges();

                expect(getDropdown(pageObject)).toBeNull();
            });

            it('The repeated down arrow moves focus to the item', () => {
                inputPO.sendKeydown('ArrowDown');
                inputPO.sendKeydown('ArrowDown');

                expect(document.activeElement?.tagName.toLowerCase()).toBe('button');
            });

            it('Click to remove the selected item', () => {
                inputPO.sendKeydown('ArrowDown');
                inputPO.sendKeydown('ArrowDown');

                (document.activeElement as HTMLElement).click();

                expect(testComponent.control.value).toEqual([]);
            });

            it('Click to select an unselected item', () => {
                inputPO.sendKeydown('ArrowDown');
                inputPO.sendKeydown('ArrowDown');

                (document.activeElement as HTMLElement).click();
                (document.activeElement as HTMLElement).click();

                expect(testComponent.control.value).toEqual([items[0]]);
            });
        });
    });

    describe('Change arrow mode', () => {
        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: TuiPageObject<TestComponent>;

        class User {
            constructor(
                public readonly firstName: string,
                public readonly lastName: string,
                public readonly id: string,
            ) {}

            public toString(): string {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        const items = [new User('Alexander', 'Inkin', '1')];

        @Component({
            standalone: true,
            imports: [
                TuiRootComponent,
                TuiMultiSelectModule,
                ReactiveFormsModule,
                TuiDataListWrapperComponent,
                TuiDataListDirective,
            ],
            template: `
                <tui-root>
                    <tui-multi-select
                        [formControl]="control"
                        [readOnly]="readOnly"
                    >
                        <tui-data-list-wrapper
                            *tuiDataList
                            automation-id="tui-multi-select__menu"
                            [items]="items"
                        ></tui-data-list-wrapper>
                    </tui-multi-select>
                </tui-root>
            `,
        })
        class TestComponent {
            @ViewChild(TuiMultiSelectComponent, {static: true})
            public component!: TuiMultiSelectComponent<User>;

            public items = items;

            public control = new FormControl([items[0]]);

            public readOnly = false;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    {
                        provide: TUI_ARROW_MODE,
                        useValue: {interactive: '☆', disabled: '★'},
                    },
                    TUI_SANITIZER_MOCK,
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new TuiPageObject(fixture);
            testComponent = fixture.componentInstance;

            fixture.detectChanges();
        });

        it('switch arrow mode by disable or enable method', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getArrow(pageObject)?.nativeElement.textContent).toBe(' ★ ');

            testComponent.control.enable();
            fixture.detectChanges();

            expect(getArrow(pageObject)?.nativeElement.textContent).toBe(' ☆ ');
        });
    });
});

function getArrow<T>(pageObject: TuiPageObject<T>): DebugElement | null {
    return pageObject.getByAutomationId('tui-multi-select__arrow');
}

function getInputTag<T>(pageObject: TuiPageObject<T>): DebugElement {
    return pageObject.getByAutomationId('tui-multi-select__input')!;
}

function getDropdown<T>(pageObject: TuiPageObject<T>): DebugElement | null {
    return pageObject.getByAutomationId('tui-multi-select__menu');
}
