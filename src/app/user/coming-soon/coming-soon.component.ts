import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMINGSOON, FERTILIZERS } from '../data/comingSoon.data';
import { ComingSoon, Fertilizers } from '../models/comingSoon.model';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  comingSoonArr: ComingSoon[] = COMINGSOON;
  fertilizersComingSoon: Fertilizers[] = FERTILIZERS;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.profileForm = this.fb.group({
    //   editedDescription: [null]
    // });
    this.imageForm = this.fb.group({
      imageDescription: [null]
    });
    console.log(this.imageForm);
    

    this.fertilizersForm = this.fb.group({
      fertilizersDescription: [null]
    })
  }

  // profileForm = new FormGroup({});
  // someProfileFormImage: any;
  // someProfileFormName: any;
  // selectComingSoon(){
  //   this.someProfileFormName =  this.profileForm.value.editedDescription.nameComingSoon;
  //   this.someProfileFormImage = this.profileForm.value.editedDescription.images;
  //   console.log(this.someProfileFormImage, this.someProfileFormName );
  // }


  imageForm = new FormGroup({});
  someImageFormName: any;
  selectSomeProduct(){
    if(this.imageForm.value.imageDescription !== null){
      this.someImageFormName = this.imageForm.value.imageDescription.nameComingSoon;
    }else{
      return
    }
    console.log(this.imageForm.value.imageDescription.nameComingSoon);
  }



  fertilizersForm = new FormGroup({});
  fertilizersName: string = '';
  selectFertilizers(){
    if(this.fertilizersForm.value.fertilizersDescription !== null){
      this.fertilizersName = this.fertilizersForm.value.fertilizersDescription.nameFertilizers;
    }else{
      return
    }
    console.log(this.fertilizersForm.value.fertilizersDescription.nameFertilizers);
  }

}
