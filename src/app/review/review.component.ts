import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Review} from '../model/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  @ViewChild('f', {static: false}) form: NgForm;
  private reviews: Review[];

  private URL = 'http://localhost:8080/review';

  constructor(private http: HttpClient) {

  }

  onSubmit() {
    this.http.post(this.URL, {content: this.form.value.review}).subscribe();
    this.form.reset();
  }

  onGetReviews() {
    this.http.get(this.URL).subscribe(value => this.reviews = value as Review[]);
  }
}

