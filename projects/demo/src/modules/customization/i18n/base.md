```ts
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

bootstrapApplication(App, {
  providers: [
    // ...
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
}).catch((err: unknown) => console.error(err));
```
