export interface IProduct
{
    id : number,
    image : string,
    name :string,
    url : string,
    offer_price : number,
    actual_price : number,
    logo : string,
    date : string,
    desc : string;
}

export class Product implements IProduct
{
    constructor ()
    {

    }
    id: number;
    image: string;
    name: string;
    url: string;
    offer_price: number;
    actual_price: number;
    logo: string;
    date: string;
    desc : string;
}