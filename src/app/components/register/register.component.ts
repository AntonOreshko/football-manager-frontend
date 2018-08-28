import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @HostBinding('class') classes = 'axs-container';

  constructor() { }

  ngOnInit() {
  }

}
