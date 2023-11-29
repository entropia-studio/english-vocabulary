import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { ChipFilterComponent } from 'src/app/components/chip-filter/chip-filter.component';
import { DescriptionCardComponent } from 'src/app/components/description-card/description-card.component';
import { DescriptionsComponent } from './descriptions.component';

const routes: Routes = [
  {
    path: '',
    component: DescriptionsComponent,
  },
];

@NgModule({
  declarations: [DescriptionsComponent],
  imports: [
    ChipFilterComponent,
    DescriptionCardComponent,
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class DescriptionsModule {}
