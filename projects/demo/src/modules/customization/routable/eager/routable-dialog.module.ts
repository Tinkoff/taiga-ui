import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';

import {RoutableDialogComponent} from './routable-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild([
            {
                path: ``,
                component: RoutableDialogComponent,
                children: [
                    {
                        path: ``,
                        loadChildren: async () =>
                            (await import(`./examples/1/page-1.module`))
                                .TuiPage1ExampleModule,
                    },
                    {
                        path: `named_outlet`,
                        loadChildren: async () =>
                            (await import(`./examples/2/page-2.module`))
                                .TuiPage2ExampleModule,
                    },
                    {
                        path: `setup`,
                        component: RoutableDialogComponent,
                    },
                ],
            },
        ]),
        TuiButtonModule,
    ],
    declarations: [RoutableDialogComponent],
    exports: [RoutableDialogComponent],
})
export class RoutableDialogModule {}
