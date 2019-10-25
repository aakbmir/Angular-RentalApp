import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component'
import { NgPipesModule } from 'ngx-pipes';
import { UppercasePipe } from './../common/pipes/uppercase.pipe';
import { MapModule } from './../common/map/map.module'

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    NgPipesModule,
    MapModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
