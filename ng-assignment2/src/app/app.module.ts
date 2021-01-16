import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { ComponentsModule } from './user_components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    UiToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
