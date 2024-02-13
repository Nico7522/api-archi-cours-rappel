import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  movieList!: Movie[];
  constructor(private _movieService: MovieService) {
    _movieService.getAll().subscribe({
      next: (data: Movie[]) => {
        this.movieList = data;
      },
    });
  }
}
