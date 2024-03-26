```ts
// ...
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TuiPushModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiPushModule,
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
