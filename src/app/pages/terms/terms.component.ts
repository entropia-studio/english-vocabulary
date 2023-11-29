import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Observable, map } from 'rxjs';
import { IVocabulary, TermType } from 'src/app/model/airtable.interface';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  vocabularyList$!: Observable<IVocabulary[]>;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.vocabularyList$ = this.store.select('vocabularyList');
  }

  filterByType(termType: TermType) {
    this.vocabularyList$ = this.store
      .select('vocabularyList')
      .pipe(
        map((vocabularyList: IVocabulary[]) =>
          vocabularyList.filter(
            (vocabularyTerm) => vocabularyTerm.type?.includes(termType) === true
          )
        )
      );
  }
}
