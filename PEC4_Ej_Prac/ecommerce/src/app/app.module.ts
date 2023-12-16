
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BouquetComponent } from './bouquet/bouquet.component';
import { AppRoutingModule } from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    BouquetComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }