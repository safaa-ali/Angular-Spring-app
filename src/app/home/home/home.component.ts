import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FooterComponent,MainComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
