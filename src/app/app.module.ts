// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { SideHeaderIconsComponent } from './components/side-header-icons/side-header-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    SideHeaderIconsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
