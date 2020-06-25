import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from '../modal/product';

@Pipe({
    name: "logoConverter"
})

export class LogoConverter implements PipeTransform
{
    transform(product : IProduct) : string
    {
        let retVal : string = "";
        if(product.logo === "amazon")
        {
            retVal = "https://autoaffiliate.in/vishnu/amazon.jpg";
        }
        else if(product.logo === "flipkart")
        {
            retVal = "https://autoaffiliate.in/vishnu/flipkart.png";
        }       
        
        return retVal;

    }
}