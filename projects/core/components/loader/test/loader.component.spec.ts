import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiLoaderComponent} from '@taiga-ui/core';
import {TuiLoaderHarness} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

describe('Loader', () => {
    @Component({
        template: `
            <tui-loader
                *ngIf="custom; else def"
                [showLoader]="showLoader"
                [textContent]="content"
            ></tui-loader>
            <ng-template #def>
                <tui-loader></tui-loader>
            </ng-template>
            <ng-template #template>Loading...</ng-template>
        `,
    })
    class TestComponent {
        @ViewChild(TuiLoaderComponent, {static: true})
        public component!: TuiLoaderComponent;

        @ViewChild('template', {static: true})
        public template: PolymorpheusContent;

        public custom = false;
        public showLoader = false;
        public content: PolymorpheusContent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiLoaderComponent],
            declarations: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('showLoader:', () => {
        it('Loader is shown by default', async () => {
            const harness = await loader.getHarness(TuiLoaderHarness);
            const shown = await harness.isLoading();

            expect(shown).toBe(true);
        });

        it('With showLoader = false, the loader is shown', async () => {
            component.custom = true;
            fixture.detectChanges();

            const harness = await loader.getHarness(TuiLoaderHarness);
            const shown = await harness.isLoading();

            expect(shown).toBe(false);
        });
    });

    describe('Text', () => {
        it('No text', async () => {
            const harness = await loader.getHarness(TuiLoaderHarness);
            const text = await harness.getText();

            expect(text).toBe('');
        });

        it('If there is `textContent`, the text is shown', async () => {
            component.content = component.template;
            component.custom = true;
            component.showLoader = true;
            fixture.detectChanges();

            const harness = await loader.getHarness(TuiLoaderHarness);
            const text = await harness.getText();

            expect(text).toBe('Loading...');
        });
    });
});
