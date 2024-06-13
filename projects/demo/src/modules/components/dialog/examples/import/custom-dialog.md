```ts
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';

// ...

export class MyDialogComponent {
  private readonly context: TuiDialogContext<boolean> = inject(POLYMORPHEUS_CONTEXT);

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
