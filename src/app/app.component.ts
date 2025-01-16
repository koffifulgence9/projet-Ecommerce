import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { ContainerComponent } from "./component/container/container.component";
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContainerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title:string;


  constructor(){
    this.title = "My Shop"
  }

  ngOnInit(): void {

  }


}
