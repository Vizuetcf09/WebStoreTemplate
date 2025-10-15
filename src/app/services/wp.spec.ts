import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WpService {
  private domain = environment.WP_DOMAIN
  private apiUrl = `${this.domain}/wp-json/wp/v2`

  constructor() { }

  async getPageInfo(slug: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/pages?slug=${slug}`)
      if (!response.ok) throw new Error('Failed to fetch page info')

      const data = await response.json()
      console.log('Data:', data) // <-- Esto aparecerá en la terminal del navegador (no en la terminal de Angular)
      return data
    } catch (error) {
      console.error('Error fetching page info:', error)
      throw error
    }
  }
}

