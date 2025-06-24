import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videojuegos',
  imports: [FormsModule],
  templateUrl: './videojuegos.html',
  styleUrl: './videojuegos.css'
})
export class Videojuegos {

  videojuegos: string[] = ['Cyberpunk 2077', 'The Witcher 3', 'Red Dead Redemption 2', 'God of War'];
  nuevoJuego: string = "";
  isLoading: boolean = false;

  addJuego(){
    if(this.nuevoJuego && this.nuevoJuego.trim()){
      this.isLoading = true;

      // Simular un pequeño delay para mostrar la animación
      setTimeout(() => {
        this.videojuegos.push(this.nuevoJuego.trim());
        this.nuevoJuego = "";
        this.isLoading = false;

        // Agregar clase de animación al último elemento
        const lastItem = document.querySelector('.videojuegos li:last-child');
        if (lastItem) {
          lastItem.classList.add('adding');
          setTimeout(() => {
            lastItem.classList.remove('adding');
          }, 600);
        }
      }, 300);
    }
  }

  removeJuego(index: number) {
    this.videojuegos.splice(index, 1);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addJuego();
    }
  }
}
