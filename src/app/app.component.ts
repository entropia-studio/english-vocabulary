import { Component, OnInit } from '@angular/core';
import { AirtableService } from './core/services/airtable.service';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'english-vocabulary';

  constructor(private airTableService: AirtableService, private store: Store) {}

  ngOnInit(): void {
    this.airTableService.getVocabularyTable().subscribe((records) => {
      this.store.set('vocabularyList', records);
    });
  }
}
