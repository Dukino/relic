import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { QuestComponent } from './quest/quest.component';
import { WeaponComponent } from './weapon/weapon.component';
import { ItemComponent } from './item/item.component';

// Shadowbringers
import { ShbHomeComponent } from './shb-home/shb-home.component';
import { ShbRelicComponent } from './shb-home/shb-relic/shb-relic.component';
import { ShbRelicCalcComponent } from './shb-home/shb-relic-calc/shb-relic-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    QuestComponent,
    WeaponComponent,
    ItemComponent,
    ShbHomeComponent,
    ShbRelicComponent,
    ShbRelicCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
