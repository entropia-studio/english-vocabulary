export interface IAirtableResponse {
  records: IAirtableRecord[];
}

export interface IAirtableRecord {
  createdTime: string;
  fields: IVocabulary;
}

export interface IVocabulary {
  term: string;
  description: string;
  type: TermType[];
}

export type TermType = 'adjective' | 'idiom' | 'noum' | 'phrasal' | 'verb';
