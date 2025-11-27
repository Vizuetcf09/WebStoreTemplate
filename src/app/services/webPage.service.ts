import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WebPageService {
    private http = inject(HttpClient);
    
    constructor() { }

}
