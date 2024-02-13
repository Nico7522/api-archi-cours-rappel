export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  synopsis: string;
  realisator: Person;
}

export interface Person {
  lastName: string;
  firstName: string;
}

export interface MovieForm {
  title: string;
  releaseYear: number;
  synopsis: string;
  realisator: Person;
}
