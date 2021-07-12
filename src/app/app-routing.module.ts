// Other Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My Components
import { HomeComponent } from './home/home.component';
import { ShbRelicComponent } from './shb-relic/shb-relic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ShB', component: ShbRelicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
