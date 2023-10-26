import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _ar:ActivatedRoute){
    this.recoupData;
  }

  recoupData(){ //recoupe es lo mismo que recover. jajajajaja.
    // const user = this._ar.snapshot.data;
    const user = this._ar.snapshot.params;
    // const user = this._ar.snapshot.paramMap.get('email');


    console.log('estoy recuperando la data');
    console.log(user['email']);
    console.log(user['password']);
  }

}
