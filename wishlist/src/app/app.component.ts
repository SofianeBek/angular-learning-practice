import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shares/model/WishItem';

// This is a decorator -> gives info about a particular component (in this case it is AppComponent)
@Component({
  selector: 'app-root', // Tag name -> used and injected in index.html.
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ]
  title = 'wishlist';
}
