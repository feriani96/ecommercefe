import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'register',component:RegisterComponent},
  { path: 'articles', component: ArticleListComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
