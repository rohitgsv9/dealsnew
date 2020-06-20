export interface IBlog
{
    id : number,
    heading : string,
    author :string,
    img : string,
    hp1 : string,
    para1 : string,
    ip1 : string,
    hp2 : string,
    para2 : string,
    ip2 : string,
    hp3 : string,
    para3 : string,
    ip3 : string,
    date : string
}

export class Blog implements IBlog
{
    constructor ()
    {

    }    
    date: string;
    id: number;
    heading: string;
    author: string;
    img: string;
    hp1: string;
    para1: string;
    ip1: string;
    hp2: string;
    para2: string;
    ip2: string;
    hp3: string;
    para3: string;
    ip3: string;
}