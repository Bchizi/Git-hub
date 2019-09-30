import { Directive ,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.fontFamily = 'Cookie'
    this.elem.nativeElement.style.fontSize = '20px'
  // console.log(elem)
}
@HostListener("mousehover") onmousehover(){
  this.fontChange('Caveat')
}
@HostListener("mouseout") onmouseout(){
  this.fontChange('Cookie')
}
private fontChange(action:string){
  this.elem.nativeElement.style.fontFamily = action
  this.elem.nativeElement.style.transitionDuration = '0.5s'
}
}
