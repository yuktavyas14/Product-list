import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() name;
  @Input() inObj;
  obj = {
    productId: "",
    productName: "",
    productSKU: "",
    productPrice:"",
  };
  ngOnInit(): void {
    if(this.inObj) {
      this.obj = this.inObj;
    }
  }

  addData(form) {
    // this.activeModal.close(form.value);
    this.activeModal.close(this.obj);

  }

}
