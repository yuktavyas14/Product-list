import { Component, OnInit } from '@angular/core';
import { PopupFormComponent } from "../popup-form/popup-form.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import {TaskDataService} from "../../service/task-data.service";

@Component({
  selector: 'app-open-task',
  templateUrl: './open-task.component.html',
  styleUrls: ['./open-task.component.css']
})
export class OpenTaskComponent implements OnInit {

  popupData: any;
  storeTask:any[];
  showBtn: boolean = false;

  constructor(private modalService: NgbModal) { }
  ngOnInit() { 
    debugger;
    this.storeTask=[];
  }

  open() {
    const modalRef = this.modalService.open(PopupFormComponent);
    modalRef.componentInstance.name = 'World'; //send data p2c
    modalRef.result.then((response) => { //receive data c2p
      console.log(response)
      this.storeTask.push(response);
      console.log(this.storeTask)
    }, (reason) => {
      console.log(reason);
    });
  }
  editTask(task) {
    const modalRef = this.modalService.open(PopupFormComponent);
    modalRef.componentInstance.inObj = task; //send data p2c
    modalRef.result.then((response) => { //receive data c2p
      console.log(response)
      this.storeTask.push(response);
      console.log(this.storeTask)
    }, (reason) => {
      console.log(reason);
    });
  }
  deleteTask(i) {
    this.storeTask.splice(i , 1);
  }
  show(i) {
    // this.showBtn = true;
    this.storeTask[i].showBtn = true;
  }
  hide(i) {
    // this.showBtn = false;
    this.storeTask[i].showBtn = false;
  }
}