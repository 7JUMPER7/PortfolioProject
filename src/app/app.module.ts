import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinkHeaderPipe } from './linkHeader.pipe';

@NgModule({
  declarations: [
    AppComponent,
      PortfolioComponent,
      LinkHeaderPipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
