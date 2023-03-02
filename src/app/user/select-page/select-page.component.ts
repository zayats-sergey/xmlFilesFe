import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SELECTOPTION } from '../data/selectOption.data';
import { SelectOption } from '../models/selectOption.model';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
 optionSelect: SelectOption[]= SELECTOPTION;
 
 languageForm = new FormGroup({});
 
  constructor(
    // private cartService: CartProductService,
    // private homeProductServise: HomeProductService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.languageForm = this.fb.group({
      option: [null]
    }); 
  }

  
  changeNameOption(){
    console.log(this.languageForm.value.option);
    this.languageForm.value.option
    if(this.languageForm.value.option === 'To order'){
      this.router.navigate(['header/order'])
    }
    if(this.languageForm.value.option === 'Coming soon'){
      this.router.navigate(['header/comingSoon'])
    }
    if(this.languageForm.value.option === 'Is available'){
      this.router.navigate(['header/available'])
    }
    if(this.languageForm.value.option === 'Post a comment'){
      this.router.navigate(['header/postAcomment'])
    }
    if(this.languageForm.value.option === 'Advertising'){
      this.router.navigate(['header/advertising'])
    }
    if(this.languageForm.value.option === 'ParalaxEffect'){
      this.router.navigate(['header/paralaxeffect'])
    }
    if(this.languageForm.value.option === 'DeepParallax'){
      this.router.navigate(['header/deepparallax'])
    }
    if(this.languageForm.value.option === 'ParallaxShow'){
      this.router.navigate(['header/parallaxShow'])
    }
    if(this.languageForm.value.option === 'VisitCard'){
      this.router.navigate(['header/visitCard'])
    }
  }



}
