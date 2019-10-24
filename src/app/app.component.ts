import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(name: string) {
    if (name) {
      this.bsModalRef = this.modalService.show(ModalImageComponent, {
        class: 'modal-full',
        animated: false,
        initialState: {
          imgname: `${name}.png`
        }
      });
    }
  }
}
