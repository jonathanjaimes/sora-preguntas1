import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: []
})
export class JugadorComponent implements OnInit {

  constructor() { }

  puntos:number = 0;

  preguntas:any;
  preguntasObjeto: any;

  escogidaNivel1: any;
  escogidaNivel2: any;
  escogidaNivel3: any;
  escogidaNivel4: any;
  escogidaNivel5: any;

  llenoNivel1: boolean = true
  llenoNivel2: boolean = true
  llenoNivel3: boolean = true
  llenoNivel4: boolean = true
  llenoNivel5: boolean = true

  ngOnInit(): void {
    this.preguntas = localStorage.getItem("persona")
    this.preguntasObjeto = JSON.parse(this.preguntas)
    // this.preguntas = JSON.parse(localStorage.getItem("persona"))

    

    // console.log(typeof(this.preguntasObjeto))
    // console.log(this.preguntasObjeto)

    if(this.preguntasObjeto.nivel1.length != 0){
      let min = 0
      let max = this.preguntasObjeto.nivel1.length - 1
  
      let valor = Math.floor((Math.random() * (max - min + 1)) + min);
      console.log(this.preguntasObjeto.nivel1.length)
      console.log(valor)
      this.escogidaNivel1 = this.preguntasObjeto.nivel1[valor]

      console.log(this.escogidaNivel1)

    } else {
      this.llenoNivel1 = false
    }

    if(this.preguntasObjeto.nivel2.length != 0){
      let min = 0
      let max = this.preguntasObjeto.nivel2.length - 1
  
      let valor = Math.floor((Math.random() * (max - min + 1)) + min);
      console.log(this.preguntasObjeto.nivel2.length)
      console.log(valor)

      this.escogidaNivel2 = this.preguntasObjeto.nivel2[valor]
  
      console.log(this.escogidaNivel2)

    } else {
      this.llenoNivel2 = false
    }

    if(this.preguntasObjeto.nivel3.length != 0){
      let min = 0
      let max = this.preguntasObjeto.nivel3.length - 1
  
      let valor = Math.floor((Math.random() * (max - min + 1)) + min);
      console.log(this.preguntasObjeto.nivel3.length)
      console.log(valor)
  
      this.escogidaNivel3 = this.preguntasObjeto.nivel3[valor]
  
      console.log(this.escogidaNivel3)

    } else {
      this.llenoNivel3 = false
    }

    if(this.preguntasObjeto.nivel4.length != 0){
      let min = 0
      let max = this.preguntasObjeto.nivel4.length - 1
  
      let valor = Math.floor((Math.random() * (max - min + 1)) + min);
      console.log(this.preguntasObjeto.nivel4.length)
      console.log(valor)
  
      this.escogidaNivel4 = this.preguntasObjeto.nivel4[valor]
  
      console.log(this.escogidaNivel4)

    } else {
      this.llenoNivel4 = false
    }

    if(this.preguntasObjeto.nivel5.length != 0){
      let min = 0
      let max = this.preguntasObjeto.nivel5.length - 1
  
      let valor = Math.floor((Math.random() * (max - min + 1)) + min);
      console.log(this.preguntasObjeto.nivel5.length)
      console.log(valor)
  
      this.escogidaNivel5 = this.preguntasObjeto.nivel5[valor]
  
      console.log(this.escogidaNivel5)

    } else {
      this.llenoNivel5 = false
    }




  }




  responder(event:any, respuestaCorrecta:any){
    console.log(event.target.value)
    console.log(respuestaCorrecta)

    if (event.target.value != respuestaCorrecta){
      alert("Respuesta incorrecta")
    }else {
      this.puntos += 5;
      console.log(this.puntos)
      console.log("Correcto!")
    }

  }



}
