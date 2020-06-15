import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from '../modal/product';

@Pipe({
    name: "urlConverter"
})

export class UrlConverter implements PipeTransform
{
    transform(product : IProduct) : string
    {
        let retVal : string = "";
        if(product.logo === "amazon")
        {
            let temp = product.url.split('tag=',2);
            retVal = temp[0]+"tag=dealspoint-21";
        }
        else if(product.logo === "flipkart")
        {
            let temp = product.url.split('affid=',2);
            retVal = temp[0]+"affid=dealspoint-21";
        }               
        
        return retVal;

    }
}