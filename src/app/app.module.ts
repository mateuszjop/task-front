import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { WordComponent } from './word/word.component';
import {MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
