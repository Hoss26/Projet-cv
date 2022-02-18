import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() cv : Cv | null=null;
  @Output() selectedCv = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectCv(){
    this.selectedCv.emit(this.cv );

  }

}
