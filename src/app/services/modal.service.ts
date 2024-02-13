import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { ModalconfirmComponent } from '../components/modalconfirm/modalconfirm.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private _dialog: MatDialog) {}

  setModal(action: boolean) {
    this.showModal.next(action);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this._dialog.open(ModalconfirmComponent, {
      width: '50%',
      height: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
