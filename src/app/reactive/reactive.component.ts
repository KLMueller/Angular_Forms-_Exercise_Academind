import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  newForm: FormGroup;
  forbiddenProjectNames = 'Test';

  ngOnInit() {
    this.newForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.asyncForbiddenNames.bind(this)
      ),
      emailReactive: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      status: new FormControl('stable'),
    });
  }
  onSubmit() {
    console.log(this.newForm.value);
    this.newForm.reset();
  }

  forbiddenNames(projectName: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(projectName.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
  asyncForbiddenNames(
    projectName: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (projectName.value === 'TestProject') {
          resolve({ forbiddenProjectNames: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
