import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { FormControl, FormGroupDirective, FormBuilder, 
  FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {

  infos = [];
  ref = firebase.database().ref('infos/');
  
  constructor(public router: Router, public loadingController: LoadingController,  private formBuilder: FormBuilder) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
    
  }
  addInfo() {
    this.router.navigate(['/add-info']);
  }
  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }
    
}
export const snapshotToArray = snapshot => {
      let returnArr = [];
  
      snapshot.forEach(childSnapshot => {
          let item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
      });
  
      return returnArr;
  };
