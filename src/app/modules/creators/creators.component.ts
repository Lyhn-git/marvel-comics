import { Component, OnInit, Renderer2 } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.sass']
})
export class CreatorsComponent implements OnInit{
  creators: any;
  public pages!: number;
  public currentPage: number = 1;
  public isLoaded: Boolean = false
  public creatorsDetails: any;

  constructor(
    private marvelService: MarvelService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.marvelService.getData('creators?limit=100').subscribe((creators) => {
      this.creators = creators.data.results;
      this.pages= creators.data.total
      this.isLoaded= true
    });
  }

  pageChange (event: any) {
    this.isLoaded= false
    const page = event.value
    const offset = page > 1 ? (page*100) : 0
    this.marvelService.getData(`creators?limit=100&offset=${offset}`).subscribe((creators) => {
      this.creators = creators.data.results;
      this.currentPage = page
      this.isLoaded= true
    });
  }

  viewDetails (id: any) {
    this.marvelService.getData(`creators/${id}?`).subscribe((data) => {
     this.creatorsDetails = data.data.results[0];
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
