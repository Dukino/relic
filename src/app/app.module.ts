import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ShbRelicComponent } from './shb-relic/shb-relic.component';
import { HomeComponent } from './home/home.component';
import { QuestComponent } from './quest/quest.component';
import { WeaponComponent } from './weapon/weapon.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ShbRelicComponent,
    HomeComponent,
    QuestComponent,
    WeaponComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
