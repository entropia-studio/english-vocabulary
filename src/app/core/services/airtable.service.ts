import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  IAirtableResponse,
  IVocabulary,
} from 'src/app/model/airtable.interface';

@Injectable({
  providedIn: 'root',
})
export class AirtableService {
  private apiUrl = '';
  private personalAccessToken = '';

  constructor(private http: HttpClient) {}

  getVocabularyTable(): Observable<IVocabulary[]> {
    const headers = {
      Authorization: `Bearer ${this.personalAccessToken}`,
      'Content-Type': 'application/json',
    };

    return this.http.get<IAirtableResponse>(this.apiUrl, { headers }).pipe(
      map((resp) => {
        const vocabularyRecords = resp.records.map((records) => records.fields);
        return this.getRandomizedVocabulary(vocabularyRecords);
      })
    );
  }

  getRandomizedVocabulary(vocabularyList: IVocabulary[]): IVocabulary[] {
    const shuffledVocabularyList: IVocabulary[] = vocabularyList.slice();
    for (let i = shuffledVocabularyList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledVocabularyList[i], shuffledVocabularyList[j]] = [
        shuffledVocabularyList[j],
        shuffledVocabularyList[i],
      ];
    }
    return shuffledVocabularyList;
  }
}
