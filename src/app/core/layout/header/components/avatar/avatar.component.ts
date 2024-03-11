import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent {
  constructor(private router: Router ){}

  logout(){
    this.router.navigateByUrl('/login');
  }
}
