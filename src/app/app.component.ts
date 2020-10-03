import { Component, VERSION ,OnInit} from '@angular/core';
import { CustDetailsService } from './cust-details.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private ss:CustDetailsService){

  }
  custdata;
  childdata=[];

  ngOnInit(){
    this.custdata=this.ss.getData();
  }

  getvalue(i){
    this.childdata.push(i);
  }
  getcustdata(){
    return this.custdata;
  }
}
