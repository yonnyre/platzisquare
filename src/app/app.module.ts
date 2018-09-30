import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from "./directives/resaltar.directive";
import { AppComponent } from './app.component';
import { ContarClickDirective } from './directives/contar-click.directive';
import {Routes,RouterModule} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import {LugaresService} from './services/lugares.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path:'',component:LugaresComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'detalle/:id',component:DetalleComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'crear',component:CrearComponent},

];
 export const firebaseConfig = {
    apiKey: "AIzaSyBKboo03jElT57rorXJnTFnup3Z43zroQM",
    authDomain: "platzisquare-34fd9.firebaseapp.com",
    databaseURL: "https://platzisquare-34fd9.firebaseio.com",
    storageBucket: "platzisquare-34fd9.appspot.com",
    messagingSenderId: "718591946523"
  };

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    DetalleComponent,
    ContarClickDirective,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDEpzcoTTWJMJrafMH9cy6cT78BXBjjQV4'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent],

})
export class AppModule { }
