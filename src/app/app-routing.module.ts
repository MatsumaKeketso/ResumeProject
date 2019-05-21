import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ContactMeComponent } from './contact-me/contact-me.component';

// const routes: Routes = [
//   {path: 'contact-me', component: ContactMeComponent},
//   {path: '', redirectTo: '/app-component'}
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
