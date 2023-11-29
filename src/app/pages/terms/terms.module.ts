import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms.component';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule } from 'ngx-markdown';
import { ChipFilterComponent } from 'src/app/components/chip-filter/chip-filter.component';

const routes: Routes = [
  {
    path: '',
    component: TermsComponent,
  },
];

@NgModule({
  declarations: [TermsComponent],
  imports: [
    ChipFilterComponent,
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MarkdownModule,
    RouterModule.forChild(routes),
  ],
})
export class TermsModule {}
