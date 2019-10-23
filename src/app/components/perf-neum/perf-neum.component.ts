import { Component, OnInit } from '@angular/core';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perf-neum',
  templateUrl: './perf-neum.component.html',
  styleUrls: ['./perf-neum.component.scss']
})
export class PerfNeumComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal() {
    this.bsModalRef = this.modalService.show(ModalImageComponent, {
      class: 'modal-full'
    });
  }
}
