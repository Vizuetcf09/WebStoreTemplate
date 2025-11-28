import Product from "../interfaces/webPage.interface";

export class ProductMapper {

  static mapProductsItemsToProduct(item: Product): Product {
    return {
      _id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      stock: item.stock,
      imageUrl: item.imageUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      __v: item.__v
    };
  }

  static mapProductsItemsToProductArray(items: Product[]): Product[] {
    return items.map(this.mapProductsItemsToProduct);
  }

}