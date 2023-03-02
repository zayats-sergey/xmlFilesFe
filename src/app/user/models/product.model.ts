export interface Product{
    nameProduct:String,
    positionAmount: Number,
    sumPrice: Number,
    priceOne: Number,
    images: any,
    numberItem: number,
    sumPriceItem?: number,
    isSelected?: ProductTypeCode,
}

export type ProductTypeCode = true | false;
