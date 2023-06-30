import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallTurningComponent } from './components/small-turning/small-turning.component';
import { MenuModule } from './modules/menu/menu.module';
import { HttpClientModule}   from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { InputDataComponent } from './components/common/input-data/input-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallTurningComponent,
    HomeComponent,
    InputDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
