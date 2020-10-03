import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustDetailsService } from './cust-details.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustDetailsService]
})
export class AppModule { }
