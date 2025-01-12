import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count = signal(0);
 
  constructor() { 
   
  }

  ngOnInit() {
    
  }

  setRecipes() {
    this.count.update(value => value + 1);
    console.log('The count is: ' + this.count());

  }
  
  
}
