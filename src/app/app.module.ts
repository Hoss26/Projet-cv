import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './Cv/cv/cv.component';
import { ListCvComponent } from './Cv/list-cv/list-cv.component';
import { ItemCvComponent } from './Cv/item-cv/item-cv.component';
import { DetailCvComponent } from './Cv/detail-cv/detail-cv.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
