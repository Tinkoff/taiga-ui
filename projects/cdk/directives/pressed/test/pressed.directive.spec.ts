import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPressedModule} from '@taiga-ui/cdk';
import {TUI_TAKE_ONLY_TRUSTED_EVENTS} from '@taiga-ui/cdk/tokens';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiPressed directive', () => {
    @Component({
        template: `
            <div
                style="position: fixed; top: 0; left: 0; z-index: 1000"
                class="wrapper"
            >
                <div
                    style="position: absolute; left: 0; top: 0; height: 200px; width: 100px"
                    class="inner"
                    (tuiPressedChange)="pressed = $event"
                >
                    button
                </div>
                text
            </div>
        `,
    })
    class TestComponent {
        public pressed = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let wrapperElement: DebugElement & {nativeElement: HTMLDivElement};
    let innerElement: DebugElement & {nativeElement: HTMLDivElement};

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPressedModule],
            declarations: [TestComponent],
            providers: [
                {provide: TUI_TAKE_ONLY_TRUSTED_EVENTS, useValue: false},
                NG_EVENT_PLUGINS,
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        innerElement = fixture.debugElement.query(By.css('.inner'));

        fixture.detectChanges();
    });

    describe('when pressed', () => {
        it('emits "true"', () => {
            const event = new MouseEvent('mousedown', {clientX: 5, clientY: 100});

            innerElement.nativeElement.dispatchEvent(event);
            fixture.detectChanges();
            expect(testComponent.pressed).toBe(true);
        });

        describe('emits "false" after pressing stopped', () => {
            describe('on initial element via', () => {
                it('mouseup', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });

            describe('on other element via', () => {
                it('mouseup', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });
        });
    });
});
