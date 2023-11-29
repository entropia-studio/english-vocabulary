import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IVocabulary, TermType } from 'src/app/model/airtable.interface';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
})
export class DescriptionsComponent implements OnInit {
  vocabularyList$!: Observable<IVocabulary[]>;

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
