import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SandS';
  
  constructor() { }

  hamburMenu() {
    //Change the click
    var p = document.getElementById("myTopNav");
    p.classList.toggle("change");
    //Mobile active button
    var responsiveMenu = document.getElementById('navmain');
    if (responsiveMenu.style.display === 'block') {
      responsiveMenu.style.display = 'none';
    } else {
      responsiveMenu.style.display = 'block';
    }
  };


}


