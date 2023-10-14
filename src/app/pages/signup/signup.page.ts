import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationUserMessage={
    email:[
      {type:"required", message:"Veuillez entrer votre email"},
      {type:"pattern", message:"L'email saisi est incorrect. essayer à nouveau"}
    ],
    password:[
      {type:"required", message:"Veuillez entrer votre mot de passe"},
      {type:"minlength", message:"Le mot de passe doit contenir au moins 5 caractères ou plus"}
    ],
    name:[
      {type:"required", message:"Veuillez entrer votre Nom et Prénom"},
      {type:"minlength", message:"Le nom et prénom doit contenir au moins 4 caractères ou plus"}
    ],
    phone:[
      {type:"required", message:"Veuillez entrer votre numéro de téléphone"},
      {type:"pattern", message:"Le numéro de téléphone doit contenir 8 chiffres"}
    ]
  }

  validationFormUser: FormGroup;
  constructor(public formbuilder: FormBuilder) {
    this.validationFormUser = new FormGroup({
      // initialisez vos champs ici si nécessaire
  });
   }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{8}$')  // Exemple pour un numéro de téléphone à 8 chiffres

      ]))

    })
  }

  Signup(valid:any){
    console.log("signup")
  }

}
