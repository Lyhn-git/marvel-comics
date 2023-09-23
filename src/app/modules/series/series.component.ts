import { Component, OnInit, Renderer2 } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.sass']
})
export class SeriesComponent implements OnInit{
  series: any;
  public pages!: number;
  public currentPage: number = 1;
  public isLoaded: Boolean = false
  public seriesDetails: any;

  constructor(
    private marvelService: MarvelService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.marvelService.getData('series?limit=100').subscribe((series) => {
      this.series = series.data.results;
      this.pages= series.data.total
      this.isLoaded= true
    });
  }

  pageChange (event: any) {
    this.isLoaded= false
    const page = event.value
    const offset = page > 1 ? (page*100) : 0
    this.marvelService.getData(`series?limit=100&offset=${offset}`).subscribe((series) => {
      this.series = series.data.results;
      this.currentPage = page
      this.isLoaded= true
    });
  }

  viewDetails (id: any) {
    this.marvelService.getData(`series/${id}?`).subscribe((data) => {
     this.seriesDetails = data.data.results[0];
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
