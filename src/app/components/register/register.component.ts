import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterForm } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(
    private _authService: AuthService,
    private _formbuilder: FormBuilder
  ) {
    this.registerForm = this._formbuilder.group({
      nickname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      let newUser: RegisterForm = {
        nickname: this.registerForm.get('nickname')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      };
      this.register(newUser);
    }
  }

  register(user: RegisterForm) {
    this._authService.register(user).subscribe({
      next: () => console.log('OK'),
      error: (err) => console.log(err),
    });
  }
}
