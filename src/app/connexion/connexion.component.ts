import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DrawerCnx } from "../data.service";
import { startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionComponent implements OnInit {
  public visible: boolean;
  public subscription_stateCnx: Observable<boolean>;
  public validateForm: FormGroup;
  passwordVisible = false;
  password?: string;

  submitForm(value: { email: string; password: string; }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  constructor(private _drawerCnx: DrawerCnx, private fb: FormBuilder) {
    this.subscription_stateCnx = this._drawerCnx.stateDrawer.pipe(startWith(false),);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      //remember: [true]
    });
  }

  close(): void {
    this._drawerCnx.changeState(false);
  }
}
