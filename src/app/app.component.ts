import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalconfirmComponent } from './components/modalconfirm/modalconfirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-conso-api';
  status!: boolean;
  constructor(private _authService: AuthService, public dialog: MatDialog) {
    this._authService.isTokenExistSub.subscribe({
      next: (value: boolean) => (this.status = value),
    });
    _authService.emitTokenExist();
  }

  logout() {
    this._authService.logout();
  }

  readToken() {
    this._authService.readToken();
  }

  checkIsAdmin() {
    console.log(this._authService.checkIsAdmin());
  }
}
