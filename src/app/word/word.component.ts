import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {

  @ViewChild('f', {static: false}) form: NgForm;
  private words: string[];

  private URL = 'http://localhost:8080/word';

  constructor(private http: HttpClient) {

  }

  onSubmit() {
    this.http.post(this.URL, this.form.value.word).subscribe();
    this.form.reset();
  }

  onGetWords() {
    this.http.get(this.URL).subscribe(value => this.words = value as string[]);
  }
}
