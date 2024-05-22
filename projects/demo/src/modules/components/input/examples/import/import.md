```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputModule,
  ],
  // ...
})
export class MyComponent {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
}
```
