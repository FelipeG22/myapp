import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';

@IonicPage()
@Component({
  selector: 'page-autor-detalhe',
  templateUrl: 'autor-detalhe.html',
})
export class AutorDetalhePage {

  autor : Autor;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.autor = this.navParams.get('autor');    
  }

}
