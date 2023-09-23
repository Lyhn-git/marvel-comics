import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2, 
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {
  @Input() public items!: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter();
  @ViewChild('btnPrev') btnPrev!: ElementRef;
  @ViewChild('btnNext') btnNext!: ElementRef;
  @Input() currentPage: number = 1;
  public pages: any;
  public startPage: number = 1;
  public endPage: number = 5;

  constructor(private renderer: Renderer2) {}

  ngOnInit (): void {
    if (this.items){
      const pagesNumber = this.getNumPages()
      this.pages = Array.from({ length: pagesNumber }, (_, index) => index + 1);
    }
  }
  getDisplayedPages(): number[] {
    if (this.pages.length <= 5) {
      return this.pages;
    }

    const displayedPages: number[] = [];

    // Ensure the current page is centered
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.pages.length, start + 4);

    for (let i = start; i <= end; i++) {
      displayedPages.push(i);
    }

    return displayedPages;
  }
  getNumPages () {
    return Math.floor(this.items / 100);
  }  
  prevPage () {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.change(this.currentPage);
    }
  }

  nextPage () {
    if (this.currentPage < this.getNumPages()) {
      this.currentPage++;
    }
    this.change(this.currentPage);
  }

  change(page: number) {
    if (page < 1) page = 1;
    if (page > this.getNumPages()) page = this.getNumPages();
    this.currentPage = page
    this.changePage.emit({ value: this.currentPage});
    // if (page == 1) {
    //     this.renderer.setStyle(this.btnPrev, "visibility", "hidden");
    // } else {
    //   this.renderer.setStyle(this.btnPrev, "visibility", "visible");
    // }
    // if (page == this.getNumPages()) {
    //   this.renderer.setStyle(this.btnNext, "visibility", "hidden");
    // } else {
    //   this.renderer.setStyle(this.btnNext, "visibility", "visible");
    // }
  }
}
