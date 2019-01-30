import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorService } from '../../services/autor.service';
import { Autor } from '../../model/autor';

@IonicPage()
@Component({
  selector: 'page-autor',
  templateUrl: 'autor.html',
})
export class AutorPage {

  autores : Autor[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public autorService : AutorService ) {
  }

  ionViewDidLoad() {
    this.autorService.getAutores().subscribe(response => {
      this.autores = response;
      
    })
  }

  detalhesAutores(a : Autor){
    this.navCtrl.push('AutorDetalhePage', {'autor' : a});
  }

}
