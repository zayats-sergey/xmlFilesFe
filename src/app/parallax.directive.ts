import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  // numberImages: number = 0;
  @HostListener("window:scroll", ["$event"])
  onWindowScroll():Observable<any>{
    // console.log(this.eleRef.nativeElement.style.top );
    // console.log(this.eleRef.nativeElement.id);
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    
    // if('0.01px' <= this.eleRef.nativeElement.style.top && this.eleRef.nativeElement.style.top <= '20px' && this.eleRef.nativeElement.id === 'square' ){
    //   this.numberImages = 1
    // }else if('21px' <= this.eleRef.nativeElement.style.top && this.eleRef.nativeElement.style.top<= '40px'  && this.eleRef.nativeElement.id === 'square' ) {
    //   this.numberImages = 2
    // }else{
    //   this.numberImages = 0
    // }
    // console.log(this.numberImages);
    
    return of( this.eleRef.nativeElement.style.top)
  }

}