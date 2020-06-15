import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from '../modal/product';

@Pipe({
    name: "discountConverter"
})

export class DiscountConverter implements PipeTransform
{
    transform(product : IProduct) : number
    {
        let retVal : number = 0;
        if(product.offer_price != 0 && product.actual_price != 0)
        {
            retVal =  Math.ceil(100 - ((product.offer_price/product.actual_price)* 100))
        }       
        
        return retVal;

    }
}