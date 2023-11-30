import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirtableService } from './core/services/airtable.service';
import { IVocabulary } from './model/airtable.interface';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  vocabularyList: IVocabulary[] = [];

  constructor(
    private airTableService: AirtableService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.airTableService.getVocabularyTable().subscribe((vocabularyList) => {
      this.store.set('vocabularyList', vocabularyList);
      this.vocabularyList = vocabularyList;
    });
  }

  randomTerms() {
    const randomVocabularyList = this.airTableService.getRandomizedVocabulary(
      this.vocabularyList
    );
    this.store.set('vocabularyList', randomVocabularyList);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
