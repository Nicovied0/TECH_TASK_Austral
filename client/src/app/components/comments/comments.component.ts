import { CommentsService } from './../../Services/Comment.service';
import { Component, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit  {

  private commentSubscription: Subscription | undefined;

  constructor(private commentsService: CommentsService,private route: ActivatedRoute) { }
  id: any
  cardsData: any = []

  ngOnInit() {
    this.getId()
    this.getComments()
  }

  getId() {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    });
  }


  getComments() {
    this.commentsService.getCommentByID(this.id).subscribe(
      (response) => {
        this.cardsData = response
      },
      (error) => {
        console.error('Error al obtener el comentario:', error);
      }
    );
  }

 
}
