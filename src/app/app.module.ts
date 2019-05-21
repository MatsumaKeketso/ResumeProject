import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { CvPageComponent } from './cv-page/cv-page.component';
// RouterModule - responsible for navigation in general
// Routes - inside will be an array that includes information of each page

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    CvPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'contact-me', component: ContactMeComponent},
      {path: 'cv-page', component: CvPageComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
