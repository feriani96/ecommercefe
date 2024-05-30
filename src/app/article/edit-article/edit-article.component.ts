import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/models/acrticle';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.paramMap.get('id')!);
  }

  getArticle(id: string): void {
    this.articleService.getArticleById(id).subscribe(
      (data: Article) => {
        this.article = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  onSubmit(): void {
    if (this.article && this.article._id) {
      this.articleService.updateArticle(this.article._id, this.article).subscribe(
        response => {
          this.router.navigate(['/home']);
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }

}
