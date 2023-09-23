import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Md5 } from 'ts-md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/';
  private apiKey = environment.marvelPubKey
  private privKey = environment.marvelPrivKey
 
  constructor(private http: HttpClient) { }

  getData (data: any): Observable<any> {
    const timestamp = Date.now().toString();
    const hash = Md5.hashStr(timestamp+this.privKey+this.apiKey);
    const url = `${this.apiUrl}${data}&ts=${timestamp}&apikey=${this.apiKey}&hash=${hash}`;

    return this.http.get(url)
  }
}
