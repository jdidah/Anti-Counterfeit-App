import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AssetsComponent } from './assets/assets.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { UsersComponent } from './users/users.component';
import { ManufacturerComponent } from './stakeholders/manufacturer/manufacturer.component';
import { RetailerComponent } from './stakeholders/retailer/retailer.component';
import { ConsumerComponent } from './stakeholders/consumer/consumer.component';
import { WholesalerComponent } from './stakeholders/wholesaler/wholesaler.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'assets', component: AssetsComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'stakeholders/manufacturer', component: ManufacturerComponent},
    {path: 'stakeholders/consumer', component: ConsumerComponent},
    {path: 'stakeholders/retailer', component: RetailerComponent},
    {path: 'stakeholders/wholesaler', component: WholesalerComponent},
    {path: 'stakeholders', component: StakeholdersComponent},
    {path: 'users', component: UsersComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
