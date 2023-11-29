import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { IVocabulary } from './model/airtable.interface';

export interface State {
  vocabularyList: IVocabulary[] | undefined;
}

const state: State = {
  vocabularyList: undefined,
};

type stateMemberName = 'vocabularyList';

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: stateMemberName): Observable<any> {
    return this.store.pipe(map((state) => state[name]));
  }

  set(name: stateMemberName, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
