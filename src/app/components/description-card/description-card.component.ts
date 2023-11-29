import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownModule } from 'ngx-markdown';
import { IVocabulary } from 'src/app/model/airtable.interface';

@Component({
  selector: 'app-description-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MarkdownModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
})
export class DescriptionCardComponent {
  @Input()
  vocabulary!: IVocabulary;

  solution!: string;

  checkLabel = 'Check!';

  form = new FormGroup({
    term: new FormControl(),
  });

  checkResponse(): void {
    if (
      (this.form.controls['term'].value as string).toLowerCase() ===
      this.vocabulary.term.toLowerCase()
    ) {
      this.checkLabel = '👍🏻';
      this.showSolution();
    } else {
      this.checkLabel = 'Try it again!';
    }
  }

  showSolution() {
    this.solution = this.vocabulary.term;
  }
}
