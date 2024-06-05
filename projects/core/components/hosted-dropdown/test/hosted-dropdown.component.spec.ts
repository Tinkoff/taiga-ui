import {NgForOf, NgIf} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiHostedDropdownModule,
    TuiOptionComponent,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiRootComponent,
} from '@taiga-ui/core';
import {tuiDispatchOnActive, TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiHostedDropdown', () => {
    @Component({
        standalone: true,
        imports: [
            TuiRootComponent,
            TuiHostedDropdownModule,
            NgIf,
            TuiPrimitiveTextfieldModule,
            TuiButtonDirective,
            TuiDataListComponent,
            NgForOf,
            TuiOptionComponent,
        ],
        template: `
            <tui-root (keydown.escape)="onEsc()">
                <tui-hosted-dropdown
                    *ngIf="default"
                    [canOpen]="canOpen"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <button id="native-button">Native button</button>
                    <button tuiButton>Button</button>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown
                    *ngIf="input"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <tui-primitive-textfield>Entry field</tui-primitive-textfield>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown
                    *ngIf="canNotOpen"
                    [canOpen]="canOpen"
                    [(open)]="open"
                >
                    <tui-primitive-textfield>Entry field</tui-primitive-textfield>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown
                    *ngIf="targeted"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <div>
                        <button tuiButton>Button</button>
                        <button
                            #host
                            tuiButton
                            tuiHostedDropdownHost
                        >
                            Arrow
                        </button>
                    </div>
                </tui-hosted-dropdown>
                <ng-template #dropdown>
                    <tui-data-list>
                        <button
                            *ngFor="let item of items"
                            automation-id="tui-menu-items__item"
                            tuiOption
                        >
                            {{ item }}
                        </button>
                    </tui-data-list>
                </ng-template>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveTextfieldComponent)
        public tuiTextfield!: TuiPrimitiveTextfieldComponent;

        @ViewChild(TuiButtonDirective, {read: ElementRef})
        public tuiButton!: ElementRef<HTMLElement>;

        @ViewChild('host')
        public target!: ElementRef<HTMLElement>;

        public open = false;
        public items = ['Item 1', 'Item 2'];
        public mode: 'can-not-open' | 'default' | 'input' | 'targeted' = 'default';
        public canOpen = true;

        public escCaught = false;

        public get input(): boolean {
            return this.mode === 'input';
        }

        public get default(): boolean {
            return this.mode === 'default';
        }

        public get targeted(): boolean {
            return this.mode === 'targeted';
        }

        public get canNotOpen(): boolean {
            return this.mode === 'can-not-open';
        }

        public onEsc(): void {
            this.escCaught = true;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let nativeButton: HTMLElement | null;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();

        nativeButton = document.querySelector('#native-button');
    });

    describe('Buttons', () => {
        it('The first element to be focused is the host, clicking on it opens a dropdown', () => {
            nativeButton?.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });

        it('Clicking on another button does not open the dropdown', () => {
            testComponent.tuiButton.nativeElement.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow opens a dropdown', () => {
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Down arrow on another button does not open the dropdown', () => {
            testComponent.tuiButton.nativeElement.focus();
            tuiDispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Down arrow moves focus to dropdown', () => {
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);
            tuiDispatchOnActive('arrowDown', fixture);

            expect(document.activeElement).toBe(getItems()[0].nativeElement);
        });

        it('Escape closes the dropdown', () => {
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);
            tuiDispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Escape in the dropdown closes it and brings focus to the host', () => {
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);
            tuiDispatchOnActive('arrowDown', fixture);
            tuiDispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
            expect(document.activeElement).toBe(nativeButton);
        });

        it('Loss of focus closes the dropdown', () => {
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);
            tuiDispatchOnActive('arrowDown', fixture);
            testComponent.tuiButton.nativeElement.focus();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow does not open dropdown if canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton?.focus();
            tuiDispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Click does not open the dropdown if canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton?.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });
    });

    describe('Entry field', () => {
        beforeEach(() => {
            testComponent.mode = 'input';
            fixture.detectChanges();
        });

        it('Clicking on the host does not open the dropdown', () => {
            testComponent.tuiTextfield.nativeFocusableElement?.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow opens a dropdown', () => {
            testComponent.tuiTextfield.nativeFocusableElement?.focus();
            tuiDispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Updating items brings focus to input', () => {
            testComponent.tuiTextfield.nativeFocusableElement?.focus();
            tuiDispatchOnActive('arrowDown', fixture);

            testComponent.items = ['Item 3', 'Item 4'];

            expect(document.activeElement).toBe(
                testComponent.tuiTextfield.nativeFocusableElement,
            );
        });
    });

    describe('Can not open', () => {
        beforeEach(() => {
            testComponent.mode = 'can-not-open';
            fixture.detectChanges();
        });

        it('Esc event should bubble up if content is empty', () => {
            testComponent.open = true;
            testComponent.canOpen = false;
            fixture.detectChanges();

            testComponent.tuiTextfield.nativeFocusableElement?.focus();
            tuiDispatchOnActive('escape', fixture);

            expect(testComponent.escCaught).toBe(true);
        });
    });

    describe('Direct Host Specification', () => {
        beforeEach(() => {
            testComponent.mode = 'targeted';
            fixture.detectChanges();
        });

        it('Clicking on the first focused element does not open the dropdown', () => {
            testComponent.tuiButton.nativeElement.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('An element with tuiHostedDropdownHost is used as a host, clicking on it opens a dropdown', () => {
            testComponent.target.nativeElement.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });
    });

    function getItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-menu-items__item');
    }
});
