import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private breakpointObserver = inject(BreakpointObserver);
  exiteToken: boolean = false
  valorCookie: string = '';


  constructor(private cookies: CookieService) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.obtenerToken()

  }

  obtenerToken() {
    const token = this.cookies.get('token')

    if (token) {
      this.exiteToken = true
    }
  }

  cerrarSesion() {
    this.cookies.set('token', '')
    //this.cookies.delete('token')
    //this.obtenerToken()
    //this.valorCookie = this.cookies.get('token');

  }

}
