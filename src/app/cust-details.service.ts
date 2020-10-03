import { Injectable } from '@angular/core';

@Injectable()
export class CustDetailsService {

  constructor() { }
 
  custdata:{name:string,age:number,contactno:number,address:string}[]=[
    {name:"Rhea sharma",age:30,contactno:999999999,address:"bombay"},
    {name:"Shaheer",age:34,contactno:8888888888,address:"Ahmedabad"},
    {name:"Roshni",age:26,contactno:777777777,address:"Lucknow"},
    {name:"Rudhraksh",age:29,contactno:6666666666,address:"Delhi"},
    {name:"Vijay",age:44,contactno:1111111111,address:"Chennai"}
  ];
  getData(){
    return this.custdata;
  }

}