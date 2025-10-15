import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
// Wordpress Headless API Service Class
export class WPService {

  private http = inject(HttpClient)
  private domain = environment.WP_DOMAIN
  private apiUrl = `${this.domain}/wp-json/wp/v2`
  // private apiUrl = 'http://localhost/wordpress/wp-json/wp/v2/pages?slug=web-store'

  constructor() {
  }

  loadWPHeadless(slug: string) {

    this.http.get(`${this.apiUrl}/pages?slug=${slug}`)
      .subscribe((resp) => {
        console.log({ resp })
      })
  }
}
