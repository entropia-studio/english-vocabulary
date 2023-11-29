import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TermType } from 'src/app/model/airtable.interface';

@Component({
  selector: 'app-chip-filter',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss'],
})
export class ChipFilterComponent {
  @Output()
  filterChange = new EventEmitter<TermType>();

  onFilterChange(termType: TermType): void {
    this.filterChange.emit(termType);
  }
}
