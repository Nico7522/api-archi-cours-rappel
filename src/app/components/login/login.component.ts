import { Component } from '@angular/core';
import { DemoobservableService } from '../../services/demoobservable.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  status!: boolean;
  email!: string;
  password!: string;
  constructor(
    private _fakeService: DemoobservableService,
    private _authService: AuthService
  ) {
    this._fakeService.isConnectedSub.subscribe({
      next: (value: boolean) => (this.status = value),
    });
  }

  login() {
    // this._fakeService.login();
    this._authService.login(this.email, this.password);
  }

  logout() {
    this._fakeService.logout();
  }
}
