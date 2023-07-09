import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower  : string = 'miguel';
  public nameUpper  : string = 'MIGUEL';
  public fullName   : string = 'mIgUEl OLivErA';

  public customDate:Date = new Date();
  
}
