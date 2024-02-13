import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieService } from './services/movie.service';
import { MovielistComponent } from './components/movielist/movielist.component';
import { authGuard } from './guards/auth.guard';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatemovieComponent } from './components/createmovie/createmovie.component';
import { authorizedGuard } from './guards/authorized.guard';

const routes: Routes = [
  { path: 'login', canActivate: [authGuard], component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'movie', component: MovielistComponent },
  {
    path: 'createmovie',
    canActivate: [authorizedGuard],
    component: CreatemovieComponent,
  },

  { path: 'userlist', component: UserlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
