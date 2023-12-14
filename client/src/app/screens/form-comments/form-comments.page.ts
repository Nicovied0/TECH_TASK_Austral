import { CommentsService } from './../../Services/Comment.service';
import { PokemonIDService } from './../../Services/PokemonID.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-comments',
  templateUrl: './form-comments.page.html',
  styleUrls: ['./form-comments.page.scss'],
})
export class FormCommentsPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private pokemonIDService: PokemonIDService, private toastController: ToastController, private commentsService: CommentsService) { }
  id: any
  pokemon: any[] = []

  formData = {
    id: '',
    pokemonComments: ''
  };


  ngOnInit() {
    this.getId()
    this.getPokemon()
  }

  getId() {
    this.route.params.subscribe(params => {
      this.id = params["id"]
      console.log(this.id);
    });
  }

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    this.formData.id = this.id
    this.commentsService.postComment(this.formData.id, this.formData.pokemonComments).subscribe(
      (response) => {
        console.log('Comentario guardado correctamente:', response);
        this.presentToast('middle');
        this.goDetails();
      },
      (error) => {
        console.error('Error al guardar el comentario:', error);
        this.presentErrorToast('middle')
      }
    );
  }


  getPokemon() {
    const id = this.id;
    this.pokemonIDService.getPokemonsID(id).subscribe(
      (pokemonDetails) => {
        this.pokemon = pokemonDetails;
      },
      (error) => {
        console.error('Error al obtener el Pokémon:', error);
      }
    );
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Saved comment!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async presentErrorToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Error saving comment',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  goDetails() {
    setTimeout(() => {
      this.router.navigate([`detail/${this.id}`]);
      window.scroll(0, 0);
    }, 3000);
  }


}