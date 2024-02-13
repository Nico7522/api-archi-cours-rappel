import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-alertmodal',
  templateUrl: './alertmodal.component.html',
  styleUrl: './alertmodal.component.scss',
})
export class AlertmodalComponent {
  show: boolean = true;

  constructor(private _modalService: ModalService) {
    _modalService.showModal.subscribe((status) => (this.show = status));
  }

  closeModal() {
    this._modalService.setModal(false);
  }
}
