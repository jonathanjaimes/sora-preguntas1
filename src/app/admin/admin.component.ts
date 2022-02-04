import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  title = 'preguntas1';

  preguntasNivel1:any = []
  preguntasNivel2:any = []
  preguntasNivel3:any = []
  preguntasNivel4:any = []
  preguntasNivel5:any = []
  


  // @ViewChild('myForm') formulario!:NgForm;



  

  amountQ:number = 0
  



  // listaRespuestas:string[]=["resp1","resp2","resp3", "resp4"];
  // niveles:string[]=["nivel1","nivel2","nivel3", "nivel4", "nivel5"];
  // titulo = ""
  // resp1 = ""
  // resp2 = ""
  // resp3 = ""
  // resp4 = ""
  // respCorrect = ""
  // nivel = ""
  // isCorrect1:any = false
  // isCorrect2:any = false
  // isCorrect3:any = false
  // isCorrect4:any = false



  constructor(private formBuilder:FormBuilder){

  }

  objeto = {}

  resp1:any
  resp2:any
  resp3:any
  resp4:any

  obtener1(e:any){
    this.resp1 = e.target.value
  }

  obtener2(e:any){
    this.resp2 = e.target.value
  }

  obtener3(e:any){
    this.resp3 = e.target.value
  }

  obtener4(e:any){
    this.resp4 = e.target.value
  }

  

  registerForm = this.formBuilder.group({
    pregunta: [""],
    resp1: [""],
    resp2: [""],
    resp3: [""],
    resp4: [""],
    nivel: [""],
    respCorrect: []

  })








  amountQuestions(){
    console.log(this.amountQ)
    
  }

  reset(){
    localStorage.clear()
    location.reload();
  }


  // funcion(event:any){

  //   this.respCorrect = event.target.value

  //   }

  pregunta:any = {}
  
  addQuestion(){

    this.pregunta = this.registerForm.value

        if (this.pregunta.nivel == "nivel1"){
      this.preguntasNivel1.push(this.pregunta)
    } else if (this.pregunta.nivel == "nivel2") {
      this.preguntasNivel2.push(this.pregunta)
    } else if (this.pregunta.nivel == "nivel3") {
      this.preguntasNivel3.push(this.pregunta)
    } else if (this.pregunta.nivel == "nivel4") {
      this.preguntasNivel4.push(this.pregunta)
    } else if (this.pregunta.nivel == "nivel5") {
      this.preguntasNivel5.push(this.pregunta)
    }

    // console.log(this.preguntasNivel1)
    // console.log(this.preguntasNivel2)
    // console.log(this.preguntasNivel3)
    // console.log(this.preguntasNivel4)

    // let pregunta = {
    //   titulo: this.titulo,
    //   resp1: {
    //     resp: this.resp1, 
    //     isCorrect: this.isCorrect1

    //   },
    //   respTrue: ,
    //   resp2: {
    //     resp: this.resp2, 
    //     isCorrect: this.isCorrect2

    //   },
    //   resp3: {
    //     resp: this.resp3, 
    //     isCorrect: this.isCorrect3

    //   },
    //   resp4: {
    //     resp: this.resp4, 
    //     isCorrect: this.isCorrect4
    //   }

    // }


    // let pregunta = {
    //   titulo: this.titulo,

    //   resp1: this.resp1, 
    //   resp2: this.resp2,
    //   resp3: this.resp3,
    //   resp4: this.resp4,
    //   nivel: this.nivel,
    //   respCorrect: this.respCorrect


    // }


    this.amountQ = this.amountQ - 1

    // if (pregunta.nivel == "nivel1"){
    //   this.preguntasNivel1.push(pregunta)
    // } else if (pregunta.nivel == "nivel2") {
    //   this.preguntasNivel2.push(pregunta)
    // } else if (pregunta.nivel == "nivel3") {
    //   this.preguntasNivel3.push(pregunta)
    // } else if (pregunta.nivel == "nivel4") {
    //   this.preguntasNivel4.push(pregunta)
    // } else if (pregunta.nivel == "nivel5") {
    //   this.preguntasNivel5.push(pregunta)
    // }

    let preguntasNiveles = {
      nivel1: this.preguntasNivel1,
      nivel2: this.preguntasNivel2,
      nivel3: this.preguntasNivel3,
      nivel4: this.preguntasNivel4,
      nivel5: this.preguntasNivel5
    }

    console.log(preguntasNiveles)

    // console.log(this.preguntasNivel1)
    // console.log(this.preguntasNivel2)
    // console.log(this.preguntasNivel3)
    // console.log(this.preguntasNivel4)
    // console.log(this.preguntasNivel5)

    
    
    // console.log(preguntasNiveles)
    
  localStorage.setItem("persona", JSON.stringify(preguntasNiveles))
    
    // this.titulo = ""
    // this.resp1 = ""
    // this.resp2 = ""
    // this.resp3 = ""
    // this.resp4 = ""
    // this.respCorrect = ""
    // this.nivel = ""

    this.resp1 = "";
    this.resp2 = "";
    this.resp3 = "";
    this.resp4 = "";

    this.registerForm.patchValue({
      pregunta: "",
      resp1: "",
      resp2: "",
      resp3: "",
      resp4: "",
      nivel: "",
      respCorrect: false
    })

  }

}
