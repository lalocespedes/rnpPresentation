import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-perf-hidr',
  templateUrl: './perf-hidr.component.html',
  styleUrls: ['./perf-hidr.component.scss']
})
export class PerfHidrComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }


  openModal(name: string) {
    this.bsModalRef = this.modalService.show(ModalImageComponent, {
      class: 'modal-full',
      animated: false,
      initialState: {
        imgname: `hidraulicas/${name}.png`
      }
    });
  }
}
