import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  logout():void{
    this.authService.logout();
    Swal.fire('Logout', ` ${this.authService.usuario.username}, has cerrado sesion con exito`, 'success')
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
