import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.scss']
})
export class RepuestosComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  ngOnInit() {
  }

  openModal(name: string) {
    this.bsModalRef = this.modalService.show(ModalImageComponent, {
      class: 'modal-full',
      animated: false,
      initialState: {
        imgname: `repuestos/${name}.png`
      }
    });
  }
}
