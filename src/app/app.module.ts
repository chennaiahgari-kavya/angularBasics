import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { TestComponent } from './test-comp/test-comp.component';
//import { profilecomponent } from './profile/profile.component';
//import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { FirstlevelComponent } from './firstlevel/firstlevel.component';
import { SeconlevelComponent } from './seconlevel/seconlevel.component';  // ✅ Import this

@NgModule({
  declarations: [
     AppComponent,
     FirstlevelComponent,
     SeconlevelComponent
   
    // ProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {

 }