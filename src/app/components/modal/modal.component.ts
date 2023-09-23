import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [`@import '../../../sass/layout'`]
})

export class ModalComponent {
  constructor(private el: ElementRef) { }
  // ngOnInit() {
  //     this.el.nativeElement.addEventListener('click', ()=> {
  //         this.close()
  //     })
  // }
  close() {
      this.el.nativeElement.classList.remove('sshow')
      this.el.nativeElement.classList.add('hhidden')
  }
}
