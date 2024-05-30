import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/models/acrticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit{

  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getAllArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  editArticle(article: Article): void {
    if (article._id) {
      this.router.navigate(['/update-article', article._id]);
    }
  }

  deleteArticle(id: string | undefined): void {
    if (id) {
      this.articleService.deleteArticle(id).subscribe(
        response => {
          this.loadArticles(); // Reload articles after deletion
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}