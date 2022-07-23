import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { PieModule } from './pie'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
