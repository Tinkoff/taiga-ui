import {Component, Input, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AbstractTuiController} from '@taiga-ui/cdk';

describe('AbstractTuiController', () => {
    @Component({
        selector: 'my-element',
        template: '',
    })
    class MyElementComponent extends AbstractTuiController {
        @Input()
        message = '';
    }

    @Component({
        template: `
            <my-element [message]="message"></my-element>
        `,
    })
    class TestComponent {
        @ViewChild(MyElementComponent)
        element!: MyElementComponent;

        message = 'hello';
    }

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, MyElementComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();
    });

    it('triggered ngOnChanges in control', () => {
        const changeSpy = jest.spyOn(fixture.componentInstance.element.change$, 'next');

        expect(changeSpy).not.toHaveBeenCalled();

        fixture.componentInstance.message = 'world';
        fixture.detectChanges();

        expect(changeSpy).toHaveBeenCalled();

        expect(fixture.componentInstance.element.message).toBe('world');
    });
});
