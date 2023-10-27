import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private _ar:ActivatedRoute){
    console.log('hola');
    this.recoupData;
  }

  recoupData(){ //recoupe es lo mismo que recover. jajajajaja.
    const user = this._ar.snapshot.params;
    const {email,password} = this._ar.snapshot.params //->esta es otra forma de hacerlo
    // const user = this._ar.snapshot.paramMap.get('email');
    // const user = this._ar.snapshot.data;


    console.log('estoy recuperando la data');
    // console.log(user['email']);
    console.log(user);
    console.log(email);
    console.log(password);
    // console.log(user['password']);
  }

  texto: string = '';
  resultado: string = '';
 
  codificar() {
    this.resultado = btoa(this.texto);
  }

  decodificar() {
    this.resultado = atob(this.texto);
  }
  
}

// cifrar() {
//   let array:any=[];
//   for (let index = 0; index < array.length; index++) {

//     console.log(array[index]);
//     // const element = array[index];
    
//   }
//   let i=0
//   for (const element of array) {
//     console.log(element); i++
//   }
// }




/*-------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------*/