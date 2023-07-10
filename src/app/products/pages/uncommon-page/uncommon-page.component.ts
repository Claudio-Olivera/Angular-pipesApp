import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name : string = 'Fernando';
  public gender : 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melisa';
    this.gender = 'female';
  }
  
  //i18 Plural
  public clients :string []= ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap: {[key:string]:string} = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

  //key value Pipe
  public person = {
    name: 'Claudio',
    age: 35,
    address: 'Rio Negro, Argentina'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise <string> = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  })




}
