import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  validationUserMessage={
    email:[
      {type:"required", message:"Veuillez entrer votre email"},
      {type:"pattern", message:"L'email saisi est incorrect. essayer à nouveau"}
    ],
    password:[
      {type:"required", message:"Veuillez entrer votre mot de passe"},
      {type:"minlength", message:"Le mot de passe doit contenir au moins 5 caractères ou plus"}
    ]
  }

  validationFormUser: FormGroup;
  constructor( public formbuilder: FormBuilder) {
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
      ]))
    })

  }

  LoginUser(valid:any){
    console.log("am logged in")
  }

}
