import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { CharactersModel } from 'src/app/models/characters.model';
import { MarvelService } from 'src/app/services/marvel.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit{
  public characters: CharactersModel[] = [];
  public pages!: number;
  public currentPage: number = 1;
  public isLoaded: Boolean = false
  public characterDetails: any;

  constructor(
    private marvelService: MarvelService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.marvelService.getData('characters?limit=100').subscribe((characters) => {
      this.characters = characters.data.results;
      this.pages= characters.data.total
      this.isLoaded= true
    });
  }

  pageChange (event: any) {
    this.isLoaded= false
    const page = event.value
    const offset = page > 1 ? (page*100) : 0
    this.marvelService.getData(`characters?limit=100&offset=${offset}`).subscribe((characters) => {
      this.characters = characters.data.results;
      this.currentPage = page
      this.isLoaded= true
    });
  }

  viewDetails (id: any) {
    this.marvelService.getData(`characters/${id}?`).subscribe((data) => {
     this.characterDetails = data.data.results[0];
     this.showDialog()
    });
  }

  showDialog(){
    let modal_t = document.getElementById('modal_1')
    // modal_t?.addEventListener('wheel', this.preventScroll)
    this.renderer.removeClass(modal_t, 'hhidden');
    this.renderer.addClass(modal_t,'sshow');
  }
  
  // preventScroll(e: { preventDefault: () => void; stopPropagation: () => void; }){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   return false;
  // }
}
