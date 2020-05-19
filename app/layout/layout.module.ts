import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AssetsComponent } from './assets/assets.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { UsersComponent } from './users/users.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import {MatSelectModule} from '@angular/material/select';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { HttpClientModule } from '@angular/common/http';
import { ManufacturerComponent } from './stakeholders/manufacturer/manufacturer.component';
import { RetailerComponent } from './stakeholders/retailer/retailer.component';
import { ConsumerComponent } from './stakeholders/consumer/consumer.component';
import { WholesalerComponent } from './stakeholders/wholesaler/wholesaler.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, AssetsComponent, StakeholdersComponent, UsersComponent, ManufacturerComponent, RetailerComponent, ConsumerComponent, WholesalerComponent,
  TransferComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatSnackBarModule,
    MatCheckboxModule,
    QRCodeModule,
    MatTabsModule,
    MatSelectModule,
    NgQRCodeReaderModule
  ]
})
export class LayoutModule { }
