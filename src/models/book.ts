export interface Book{
    id: number | undefined;
    name: string | undefined;
    author:string | undefined;
    publisher:string| "";
    category:string | "";
    pageCount:number | 0;
    imgUrl: string | undefined;
 
}
