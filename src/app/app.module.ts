import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccordionModule, AutoCompleteModule, ButtonModule, FieldsetModule, TreeTableModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DirtreeComponent} from './dirtree/dirtree.component';

@NgModule({
  declarations: [
    AppComponent, DirtreeComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ButtonModule, TreeTableModule, FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
