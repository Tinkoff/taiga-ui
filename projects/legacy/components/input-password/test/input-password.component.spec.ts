import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

import {TuiInputPasswordComponent} from '../input-password.component';
import {TuiInputPasswordModule} from '../input-password.module';

describe('InputPassword', () => {
    @Component({
        standalone: true,
        imports: [
            TuiInputPasswordModule,
            ReactiveFormsModule,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-input-password
                [formControl]="control"
                [readOnly]="readOnly"
                [tuiTextfieldSize]="size"
            ></tui-input-password>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPasswordComponent, {static: true})
        public component!: TuiInputPasswordComponent;

        public control = new FormControl();
        public readOnly = false;
        public size: TuiSizeL | TuiSizeS = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPasswordComponent;
    let pageObject: TuiPageObject<TestComponent>;

    function getIcon(): DebugElement | null {
        return pageObject.getByAutomationId('tui-password__icon');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;

        fixture.detectChanges();
    });

    describe('Field visibility', () => {
        it('Initially, the field is type = "password", so only dots are visible when entering', () => {
            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });

        it('When you click on the "Show password" icon, the field becomes type = "text"', () => {
            getIcon()!.nativeElement.click();

            const inputType = component.inputType;

            expect(inputType).toBe('text');
        });

        it('With readOnly, the type field="password"', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });

        it('When the field is disabled type="password"', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe('password');
        });
    });
});
