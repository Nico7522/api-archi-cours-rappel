import { Component } from '@angular/core';
import { DemoobservableService } from '../../services/demoobservable.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  status!: boolean;
  constructor(private _authService: AuthService) {
    this._authService.isTokenExistSub.subscribe({
      next: (value: boolean) => (this.status = value),
    });
    _authService.emitTokenExist();
  }
}
