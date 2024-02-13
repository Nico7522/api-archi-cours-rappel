import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { MatDialog } from '@angular/material/dialog';

export const authorizedGuard: CanActivateFn = (route, state) => {
  let _authService: AuthService = inject(AuthService);
  let _modalService: ModalService = inject(ModalService);

  if (!_authService.checkIsAdmin()) {
    _modalService.openDialog('0ms', '0ms');
    return false;
  }
  return true;
};
