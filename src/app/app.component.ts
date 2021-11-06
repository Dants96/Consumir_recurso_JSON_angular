import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:any=null;
  page!: number;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("https://www.datos.gov.co/resource/tyhr-3h8y.json")
    .subscribe(
      result => {                      
        this.items = result;
      },
      error => {
        console.log('No se pudo asignar el item ');
      }
    );
  }
}
