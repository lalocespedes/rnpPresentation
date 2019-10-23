import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  imgname: string;

  constructor(public bsModalRef: BsModalRef, private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.setStyle(this.el.nativeElement, 'flex', '1');
    this.render.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(../../../assets/img/${this.imgname})`
    );
    this.render.setStyle(this.el.nativeElement, 'background-repeat', 'no-repeat');
    this.render.setStyle(this.el.nativeElement, 'background-size', '100% 100%');
  }
}
