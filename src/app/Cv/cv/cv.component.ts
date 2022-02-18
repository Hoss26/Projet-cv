import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvs: Cv[]=[];
  selectedCv: Cv | null=null;

  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'Teacher' , 'as.jpg', '12fsd3', 39),
      new Cv(2, 'sallouhi', 'henda', 'Teacher' , 'rotating_card_profile.png', '45hfd0', 25 ),
      new Cv(2, 'Mekni', 'yassine', 'Ingénieur' , 'rotating_card_profile3.png', '0256hfd0', 28 ),


    ];
    console.log(this.cvs);
  }

  selectCv(cv: any){
    this.selectedCv = cv;
  }

}
