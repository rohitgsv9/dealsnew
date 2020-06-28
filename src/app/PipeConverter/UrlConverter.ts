import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from '../modal/product';

@Pipe({
    name: "urlConverter"
})

export class UrlConverter implements PipeTransform
{
    transform(product : IProduct) : string
    {
        let retVal : string = product.url;
        if(product.logo === "amazon")
        {
            if(product.url.indexOf('tag=') === -1)
            {
                if(product.url.indexOf('?') === -1)
                {
                    retVal = product.url+'?tag=3284-21';
                }
                else
                {
                    retVal = product.url+'&tag=3284-21';
                }

            }else
            {
                let temp = product.url.split('tag=',3);
                let temp1 = temp[1].split('21',2);
                retVal = temp1.length > 1 ? temp[0]+'tag=3284-21'+temp1[1] : temp[0]+'tag=3284-21';            
            }
        }
        else if(product.logo === "flipkart")
        {
            if(product.url.indexOf('affid=') === -1)
            {
                if(product.url.indexOf('?') === -1)
                {
                    retVal = product.url+'?affid=Vishnupra5';
                }
                else
                {
                    retVal = product.url+'&affid=Vishnupra5';
                }

            }else
            {
            let temp = product.url.split('affid=',2);
            retVal = temp[0]+"affid=Vishnupra5";            
            }            
        }               
        
        return retVal;

    }
}