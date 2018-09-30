import { Directive, HostListener,HostBinding } from '@angular/core';

@Directive({
	//para contar solo para hipervinculos
  selector: 'li[contar-clicks]'
})
export class ContarClickDirective {
	clickN = 0;
	@HostBinding('style.opacity') opacity: number = .1;
	@HostListener('click',['$event.target']) onClick(btn){
		console.log('a',btn,"Numero de clicks :" ,this.clickN++);
		this.opacity += .1;
	}
  constructor() { }

}
