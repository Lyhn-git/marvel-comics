import { Component, OnInit, Renderer2 } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.sass']
})
export class ComicsComponent implements OnInit{
  comics: any;
  public pages!: number;
  public currentPage: number = 1;
  public isLoaded: Boolean = false
  public comicsDetails: any;

  constructor(
    private marvelService: MarvelService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.marvelService.getData('comics?limit=100').subscribe((comics) => {
      this.comics = comics.data.results;
      this.pages= comics.data.total
      this.isLoaded= true
    });
  }

  pageChange (event: any) {
    this.isLoaded= false
    const page = event.value
    const offset = page > 1 ? (page*100) : 0
    this.marvelService.getData(`comics?limit=100&offset=${offset}`).subscribe((comics) => {
      this.comics = comics.data.results;
      this.currentPage = page
      this.isLoaded= true
    });
  }

  viewDetails (id: any) {
    this.marvelService.getData(`comics/${id}?`).subscribe((data) => {
     this.comicsDetails = data.data.results[0];
     this.showDialog()
    });
  }

  showDialog(){
    let modal_t = document.getElementById('modal_1')
    // modal_t?.addEventListener('wheel', this.preventScroll)
    this.renderer.removeClass(modal_t, 'hhidden');
    this.renderer.addClass(modal_t,'sshow');
  }
}
