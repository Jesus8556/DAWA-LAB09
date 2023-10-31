import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  imageUrls: { url: string; title:string; descripcion: string }[] = [
    {
      url: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg',
      title:"Hollow Knight",
      descripcion: 'Imagen del aclamado juego del genero "indie" Hollow Knight'
    },
    {
      url: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/h/hollow-knight-silksong-switch/hero',
      title:"Hollow Knight Silksong",
      descripcion: 'Imagen del juego esperado Hollow Knight SilkSong'
    },
    {
      url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/Hollow-Knight-Silksong-Hornet-vs-Knight.jpg',
      title:"Fan Art Hollow Knight Series",
      descripcion: 'Arte conceptual de dos personajes famosos de la franquicia "Hollow Knight'
    }

  ];

}
