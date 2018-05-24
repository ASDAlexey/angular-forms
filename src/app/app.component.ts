import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(environment);
  }

  /*@ViewChild('formRef') form;
  username = 'John';

  onSunmit(value) {
    console.log(value);
  }

  ngAfterViewInit() {
    combineLatest(
      this.form.valueChanges,
      this.form.statusChanges,
      (value, status) => ({ value, status })
    ).pipe(filter(({ status }) => status === 'VALID'))
     .subscribe(({ value }) => console.log(value));

    // this.form.valueChanges.subscribe((e) => console.log(e));
    // this.form.statusChanges.subscribe((e) => console.log(e));
  }*/

  locations = ['Home', 'Away', 'Space', 'Ocean', 'Stars'];
  // currectLocation = 'Space';

}
