```ts
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  providers: [
    tuiNotificationOptionsProvider({
      label: ({status}: any) => status[0].toUpperCase() + status.slice(1),
      status: 'error',
      autoClose: 7000,
    }),
  ],
  //  ...
})
export class Example {}
```
