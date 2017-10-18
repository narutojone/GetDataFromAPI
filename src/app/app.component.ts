import { Component } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Test';
  searchStr: string; //Input Search Variable
  data: any = null; // API Data

  constructor(private _http: Http) {
  }

  private getCountryInfo(name) {
    
    return this._http.get('http://services.groupkt.com/country/search?text='+name).map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data['RestResponse']['result'][0]; // Get Information from the API
                });
  }  
}
