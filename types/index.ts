import { MouseEventHandler } from "react";
                   
export interface CustomButtonProps{
    title: string;
    constainerStyles? :string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps{
   manufacturer: string,
   setManufacturer:(manufacture:string) =>void

}
export interface CustomFilterProps{
    title:string,
}