import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
  standalone: false
})
export class BorderCardDirective {

  private initialColor : string = '#f5f5f5';
  private defaultColor : string = '#009688';
  private defaultHeight : number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmBorderCard') borderColor: string; //alias
  //@Input() pkmBorderCard: string; // sans alias

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height= `${height}px`;
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
