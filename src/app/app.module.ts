import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './components/movielist/movielist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './components/userlist/userlist.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatemovieComponent } from './components/createmovie/createmovie.component';
import { AlertmodalComponent } from './components/alertmodal/alertmodal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ModalconfirmComponent } from './components/modalconfirm/modalconfirm.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { tokenInterceptor } from './services/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MovielistComponent,
    UserlistComponent,
    RegisterComponent,
    CreatemovieComponent,
    AlertmodalComponent,
    ModalconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
