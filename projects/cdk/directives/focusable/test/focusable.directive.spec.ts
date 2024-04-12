import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiFocusableDirective, TuiFocusableModule} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiFocusable directive', () => {
    @Component({
        template: `
            <div [tuiFocusable]="focusable"></div>
        `,
    })
    class TestComponent {
        public focusable!: boolean;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiFocusableModule],
            declarations: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.directive(TuiFocusableDirective));
    });

    it('when tuiFocusable === false tabindex attribute is "-1"', () => {
        testComponent.focusable = false;
        fixture.detectChanges();
        expect(testElement.nativeElement.tabIndex).toBe(-1);
    });

    it('when tuiFocusable === true tabindex attribute is "0"', () => {
        testComponent.focusable = true;
        fixture.detectChanges();
        expect(testElement.nativeElement.tabIndex).toBe(0);
    });
});
