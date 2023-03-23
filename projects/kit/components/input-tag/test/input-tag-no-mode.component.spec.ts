import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiInputTagComponent,
    TuiInputTagModule,
    tuiInputTagOptionsProvider,
} from '@taiga-ui/kit';

describe(`InputTag [TUI_TAG_STATUS=neutral]`, () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-tag
                    [ngModel]="tags"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                ></tui-input-tag>
            </tui-root>
        `,
        providers: [tuiInputTagOptionsProvider({tagStatus: `neutral`})],
    })
    class TestComponent {
        @ViewChild(TuiInputTagComponent)
        component!: TuiInputTagComponent;

        tags = [`Tag1`, `Tag2`];

        labelOutside = true;
        size: TuiSizeL | TuiSizeS = `s`;
    }

    let fixture: ComponentFixture<TestComponent>;

    it(`correct status for tag when tuiMode emitted null`, async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                TuiRootModule,
                TuiInputTagModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        expect(
            fixture.nativeElement
                .querySelector(`[data-tui-host-status]`)
                ?.getAttribute(`data-tui-host-status`),
        ).toEqual(`neutral`);
    });
});
