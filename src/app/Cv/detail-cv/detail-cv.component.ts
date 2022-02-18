import { Component, Input, OnInit } from '@angular/core';
import { Cv} from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() cv : Cv | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
