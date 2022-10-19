export class Goal {

    showDescription: boolean;

    constructor(public id:number, public name:string, public description:string, public completeDate:Date){
    //    The public keyword is an access modifier and it determines where the class properties are visible which in our case is anywhere outside the class.
        this.id = id;
        this.name = name;
        this.description = description;
        this.showDescription = false;

    }
  }