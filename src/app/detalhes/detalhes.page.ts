import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  info = {};
  constructor(private route: ActivatedRoute,
    public router: Router) { 
      firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
        this.info = snapshotToObject(resp);
      });
    }

  ngOnInit() {
  }

}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
