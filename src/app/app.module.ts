import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ConversionComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
