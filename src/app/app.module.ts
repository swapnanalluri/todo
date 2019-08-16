import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:MainComponent
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
