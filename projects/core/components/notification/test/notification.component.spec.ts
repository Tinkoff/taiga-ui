import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotification,
    TuiNotificationComponent,
    TuiNotificationModule,
    TuiSvgService,
} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('Notification', () => {
    describe('Without options', () => {
        @Component({
            template: `
                <tui-notification
                    *ngIf="hasCloseButton; else noClose"
                    [status]="status"
                    (close)="onClose()"
                >
                    Short simple informational message
                </tui-notification>
                <ng-template #noClose>
                    <tui-notification [status]="status">
                        Short simple informational message
                    </tui-notification>
                </ng-template>
            `,
        })
        class TestComponent {
            @ViewChild(TuiNotificationComponent, {static: false})
            protected component!: TuiNotificationComponent;

            protected hasCloseButton = true;
            protected status: TuiNotification = 'info';

            public onClose(): void {}
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: TuiPageObject<TestComponent>;

        function getIcon(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__icon')!;
        }

        function getClose(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__close')!;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [NoopAnimationsModule, TuiNotificationModule],
                declarations: [TestComponent],
                providers: [TuiSvgService],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new TuiPageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        describe('icon', () => {
            it('present by default', () => {
                expect(getIcon()).not.toBeNull();
            });
        });

        describe('closing cross', () => {
            it('present when subscribing to close', () => {
                expect(getClose()).not.toBeNull();
            });

            it('without subscription to close is missing', () => {
                testComponent.hasCloseButton = false;
                fixture.detectChanges();

                expect(getClose()).toBeNull();
            });
        });
    });

    describe('With options', () => {
        @Component({
            template: `
                <tui-notification>Short simple informational message</tui-notification>
            `,
        })
        class TestComponent {
            @ViewChild(TuiNotificationComponent, {static: false})
            protected component!: TuiNotificationComponent;
        }

        const status = 'error';

        let fixture: ComponentFixture<TestComponent>;
        let pageObject: TuiPageObject<TestComponent>;

        function getIcon(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__icon')!;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [NoopAnimationsModule, TuiNotificationModule],
                declarations: [TestComponent],
                providers: [
                    TuiSvgService,
                    {
                        provide: TUI_NOTIFICATION_OPTIONS,
                        useValue: {
                            ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                            status,
                            icon: null,
                        },
                    },
                ],
            });
            await TestBed.compileComponents();

            fixture = TestBed.createComponent(TestComponent);
            pageObject = new TuiPageObject(fixture);
            fixture.detectChanges();
        });

        describe('icon', () => {
            it('when icon = null is absent', () => {
                expect(getIcon()).toBeNull();
            });
        });
    });
});
