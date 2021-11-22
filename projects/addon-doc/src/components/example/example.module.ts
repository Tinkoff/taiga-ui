import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiDocExampleGetTabsPipe} from './example-get-tabs.pipe';
import {TuiDocExampleComponent} from './example.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiDocCopyModule,
        TuiDocCodeModule,
        PolymorpheusModule,
    ],
    declarations: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
    exports: [TuiDocExampleComponent, TuiDocExampleGetTabsPipe],
})
export class TuiDocExampleModule {}
