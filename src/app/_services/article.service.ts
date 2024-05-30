import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/acrticle';

const API_URL = 'http://localhost:8080/api/articles';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(API_URL);
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${API_URL}/${id}`);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(API_URL, article);
  }

  updateArticle(id: string, article: Article): Observable<Article> {
    return this.http.put<Article>(`${API_URL}/${id}`, article);
  }

  deleteArticle(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
