import { Animal } from "./animal.js";

export class Cat extends Animal{
    constructor(name,icon,id){
      super(name,icon);
      this.id=id;
    }
    
    get GetId(){
        return this.id;
    }
    
}