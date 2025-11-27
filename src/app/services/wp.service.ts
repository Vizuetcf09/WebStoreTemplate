// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable, signal } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { WPH } from '../interfaces/wph.interface';


// @Injectable({ providedIn: 'root' })
// // Wordpress Headless API Service Class
// export class WPService {

//   private http = inject(HttpClient)
//   private domain = environment.WP_DOMAIN
//   private apiUrl = `${this.domain}/wp-json/wp/v2`

//   wPHeadless = signal<WPH[]>([])
//   wPHeadlessLoading = signal(true)

//   constructor() {
//   }

//   loadWPHeadless(slug: string) {

//     this.http.get<WPApiResponse>(`${this.apiUrl}/pages?slug=${slug}`)
//       .subscribe((resp) => {
//         console.log(resp)
//         this.wPHeadlessLoading.set(false)
//       })
//   }
// }
