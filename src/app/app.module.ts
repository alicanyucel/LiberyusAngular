import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisyerComponent } from './components/regisyer/regisyer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentPipe } from './pipe/comment.pipe';
import { BlogPipe } from './pipe/blog.pipe';
import { CheckInputValidDirective } from './directives/check-input-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisyerComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    BlogComponent,
    CommentComponent,
    CommentPipe,
    BlogPipe,
    CheckInputValidDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
