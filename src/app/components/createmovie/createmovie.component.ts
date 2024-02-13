import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieForm, Person } from '../../models/movie.model';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrl: './createmovie.component.scss',
})
export class CreatemovieComponent {
  movieForm!: FormGroup;
  constructor(
    private _movieService: MovieService,
    private _formBuilder: FormBuilder
  ) {
    this.movieForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      releaseYear: ['', [Validators.required]],
      synopsis: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    if (this.movieForm.valid) {
      let p: Person = {
        firstName: this.movieForm.get('firstname')?.value,
        lastName: this.movieForm.get('lastname')?.value,
      };
      let newMovie: MovieForm = {
        title: this.movieForm.get('title')?.value,
        releaseYear: this.movieForm.get('releaseYear')?.value,
        synopsis: this.movieForm.get('synopsis')?.value,
        realisator: p,
      };
      this.createMovie(newMovie);
    }
  }
  createMovie(movie: MovieForm) {
    this._movieService.createMovie(movie).subscribe({
      next: () => console.log('ok'),
      error: (err) => console.log(err),
    });
  }
}
