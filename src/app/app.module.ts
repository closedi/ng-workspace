// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './modules/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { SideHeaderIconsComponent } from './components/side-header-icons/side-header-icons.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ChatComponent } from './components/chat/chat.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { WorkzoneComponent } from './components/workzone/workzone.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    SideHeaderIconsComponent,
    CustomersListComponent,
    UserPanelComponent,
    ChatComponent,
    CustomerDetailsComponent,
    WorkzoneComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // isOpen: isOpenReducer,
      // chatState: chatStateReducer,
      // messageQueue: messageQueueReducer,
    }, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
