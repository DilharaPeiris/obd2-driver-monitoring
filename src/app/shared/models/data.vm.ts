import { Time } from "@angular/common";
//import {} from "@angular/common"

export interface DataVM{
    id?: number;
    createdDate?:Date;
    createdTime?:Time;
    location?:string;
    avgGoogleAPISpeed?:number
}