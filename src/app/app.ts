import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojuegos } from './components/videojuegos/videojuegos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Videojuegos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected nombre = 'Prueba de angular 18';
  protected descripcion = 'esto es una clase rapida de repaso de angular moderno';
  protected profesor= 'San1190 ;)';

}
