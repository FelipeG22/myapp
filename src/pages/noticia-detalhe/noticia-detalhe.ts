import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticias';

@IonicPage()
@Component({
  selector: 'page-noticia-detalhe',
  templateUrl: 'noticia-detalhe.html',
})
export class NoticiaDetalhePage {

  noticia : Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.noticia = this.navParams.get('noticia');
  }

}
