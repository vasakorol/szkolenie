import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {BackendModule} from "./backend/backend.module";

import {HomeComponent} from './frontend/home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routingConfig:Routes = [
  { path:'', component: HomeComponent },
  { path:'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

const routerModule = RouterModule.forRoot(routingConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
