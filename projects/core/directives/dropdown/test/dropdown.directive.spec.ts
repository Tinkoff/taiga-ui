import type {ElementRef} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiDropdownDirective,
    TuiDropdownManualDirective,
    TuiRootComponent,
} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {TuiPageObject} from '@taiga-ui/testing';

describe('TuiDropdownDirective', () => {
    @Component({
        standalone: true,
        imports: [
            TuiRootComponent,
            TuiDropdownDirective,
            TuiDropdownManualDirective,
            PolymorpheusOutlet,
            PolymorpheusTemplate,
        ],
        template: `
            <tui-root>
                <button automation-id="tui-dropdown-directive__button"></button>
                <div
                    [tuiDropdown]="dropdown"
                    [tuiDropdownManual]="open"
                >
                    Hosty host
                    <button automation-id="tui-dropdown-directive__host"></button>
                </div>
                <ng-template
                    #dropdown="polymorpheus"
                    polymorpheus
                >
                    <div automation-id="tui-dropdown-directive__item">
                        Droppy down
                        <input automation-id="tui-dropdown-directive__input" />
                    </div>
                </ng-template>
            </tui-root>
        `,
    })
    class TestComponent {
        public open = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let pageObject: TuiPageObject<TestComponent>;
    let testComponent: TestComponent;
    const testContext = {
        get prefix() {
            return 'tui-dropdown-directive__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('when tuiDropdownManual = false, dropdown is not shown', () => {
        expect(getDropdown()).toBeNull();
    });

    it('when tuiDropdownManual = true, dropdown is shown', () => {
        testComponent.open = true;
        fixture.detectChanges();

        expect(getDropdown()?.nativeElement.textContent?.trim()).toBe('Droppy down');
    });

    function getDropdown(): ElementRef<HTMLDivElement> | null {
        return pageObject.getByAutomationId(`${testContext.prefix}item`);
    }
});
