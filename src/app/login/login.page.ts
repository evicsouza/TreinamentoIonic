import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ref = firebase.database().ref('infos/');
  infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { 
      this.infoForm = this.formBuilder.group({
        'info_name' : [null, Validators.required],
        'info_fone' : [null, Validators.required]
      });
    }

  ngOnInit() {
  }
  saveInfo() {
    let newInfo = firebase.database().ref('infos/').push();
    newInfo.set(this.infoForm.value);
    this.router.navigate(['/detalhes/'+newInfo.key]);
  }

}
