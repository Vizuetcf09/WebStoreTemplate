import { Component, inject, OnInit } from '@angular/core'
import { WPService } from '../services/wp.service'

@Component({
  selector: 'app-root',
  template: `<h1>{{ pageTitle }}</h1>`,
})

export default class HomeComponent implements OnInit {
  pageTitle = 'Hola WordPress Headless'

  constructor(private wp: WPService) { }

  async ngOnInit() {
    const slug = 'web-store' // cambia por el slug real de tu página en WordPress
    const data = this.wp.loadWPHeadless('web-store')
  }

  wpService = inject(WPService)
}
