import { WPApiResponse } from "../interfaces/wpapi.interface";
import { WPH } from "../interfaces/wph.interface";

export class WPHMapper {
  static mapWPAtoWPHeadles(item: WPApiResponse): WPH {
    return {
      id: item.id,
      title: item.title.rendered
    }
  }

  static mapWPAtoWPHeadlestoArray(items: WPApiResponse[]): WPH[] {
    return items.map(this.mapWPAtoWPHeadles)
  }
}
