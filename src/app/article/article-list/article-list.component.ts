import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/models/acrticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit{

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

}
