import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private alfabeto:string = 'abcdefghijklmnopqrstuvwxyz';
  text:string='';
  key:number=0;
  mode:boolean=true;

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

  // texto: any = '';
  // resultado: any = '';


  // codificar() {
  //   this.resultado = btoa(this.texto);
  // }

  // decodificar() {
  //   this.resultado = atob(this.texto);
  // }

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
  texto: string = '';
  resultado: string = '';
 
  codificar() {
    this.resultado = btoa(this.texto);
  }

  decodificar() {
    this.resultado = atob(this.texto);
  }
-------------------------------------------------------------------------------------*/

// //----------CODIFICAR Y DECODIFICAR----------------------

// texto: any = '';
// resultado: any = '';

// codificar(){

//   // Texto que deseas codificar
//   const textoOriginal = 'Hola, esto es un ejemplo';
  
//   // Codificación del texto a bytes usando UTF-8
//   const buffer = Buffer.from(textoOriginal, 'utf-8');
  
//   // El resultado es un objeto Buffer que contiene los bytes
//   console.log('Texto codificado:', buffer);
// }

// decodificar(){
//   // Supongamos que tienes un buffer con bytes (por ejemplo, recibidos desde algún lugar)
// const buffer = Buffer.from([72, 111, 108, 97, 44, 32, 101, 115, 116, 111, 32, 101, 115, 32, 117, 110, 32, 101, 106, 101, 109, 112, 108, 111]);

// // Decodificación de bytes a texto usando UTF-8
// const textoDecodificado = buffer.toString('utf-8');

// // El resultado es el texto decodificado
// console.log("Texto decodificado:", textoDecodificado);

// }



// //---------FIN------------