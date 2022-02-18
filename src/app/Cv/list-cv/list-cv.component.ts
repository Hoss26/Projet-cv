import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
  @Input() cvs: Cv[]=[]  ;

  @Output() selectedCv = new EventEmitter<Cv>();


  constructor() { }

  ngOnInit(): void {
  }
  selectCv(selectedCv: any){
    this.selectedCv.emit(
      selectedCv
    );
  }

}
