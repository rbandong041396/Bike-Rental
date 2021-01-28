import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AgmCoreModule } from '@agm/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FindabikeComponent } from './components/findabike/findabike.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindabikeComponent,
    AboutComponent
  ],
  imports: [
    // HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyCResB51IkrvtXvWQNf-fhuaOi8EVB_Nno'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
