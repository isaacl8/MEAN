import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';
import { BrowseComponent } from './browse/browse.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { BrowseService} from './browse/browse.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService, ListService, BrowseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
