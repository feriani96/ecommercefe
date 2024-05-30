import { Component } from '@angular/core';
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/models/acrticle';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent {
  article: Article = {
    name: '',
    price: 0,
    size: '',
    imageUrl: ''
  };
  submitted = false;

  constructor(private articleService: ArticleService) {}

  saveArticle(): void {
    const data = {
      name: this.article.name,
      price: this.article.price,
      size: this.article.size,
      imageUrl: this.article.imageUrl
    };

    this.articleService.createArticle(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newArticle(): void {
    this.submitted = false;
    this.article = {
      name: '',
      price: 0,
      size: '',
      imageUrl: ''
    };
  }
}
