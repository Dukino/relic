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
import { ShbRelicComponent } from './shb-home/shb-relic/shb-relic.component';
import { ShbRelicCalcComponent } from './shb-home/shb-relic-calc/shb-relic-calc.component';
import { RelicStepComponent } from './relic-step/relic-step.component';
import { PoeticsVendorsComponent } from './poetics-vendors/poetics-vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    QuestComponent,
    WeaponComponent,
    ItemComponent,
    ShbRelicComponent,
    ShbRelicCalcComponent,
    RelicStepComponent,
    PoeticsVendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
