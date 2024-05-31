import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importez ActivatedRoute
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/models/acrticle';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit{
  articles: Article[] = [];
  articleIdToDelete: string | undefined;
  showModal: boolean = false;
  successMessage: string | null = null;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute // Injectez ActivatedRoute ici
  ) {}

  ngOnInit(): void {
    this.loadArticles();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['message'] || null;
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = null; // Réinitialiser le message après 30 secondes
        }, 3000); // 10 secondes
      }
    });
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

  confirmDelete(id: string): void {
    this.articleIdToDelete = id; // Stocker l'ID de l'article à supprimer
    this.showModal = true;
  }

  deleteArticle(): void {
    if (this.articleIdToDelete) { // Vérifier si l'ID est défini
      this.articleService.deleteArticle(this.articleIdToDelete).subscribe(
        response => {
          this.showModal = false;
          this.router.navigate(['/home'], { queryParams: { message: 'Article deleted successfully!' } });
          this.loadArticles(); // Recharger la liste des articles après la suppression
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
