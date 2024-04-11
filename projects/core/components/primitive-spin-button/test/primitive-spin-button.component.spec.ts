import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiPrimitiveSpinButtonComponent,
    TuiPrimitiveSpinButtonModule,
} from '@taiga-ui/core';

describe('primitiveSpinButton', () => {
    @Component({
        template: `
            <tui-primitive-spin-button>My button</tui-primitive-spin-button>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveSpinButtonComponent, {static: true})
        public component!: TuiPrimitiveSpinButtonComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveSpinButtonComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveSpinButtonModule],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    it('emits left click if it is not disabled', () => {
        let result: unknown = {};

        component.leftClick.subscribe((voidResult: void) => {
            result = voidResult;
        });

        component.onLeftClick();

        expect(result).toBeUndefined();
    });

    it('emits right click if it is not disabled', () => {
        let result: unknown = {};

        component.rightClick.subscribe((voidResult: void) => {
            result = voidResult;
        });

        component.onRightClick();

        expect(result).toBeUndefined();
    });
});
