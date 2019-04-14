class University {

  constructor(public name: string, public dept: string){};

  graduation(year:number){
    console.log(`Graduating ${this.dept} ${year} students`);
    
  }
}

let mum = new University("MUM", "Computer science");
mum.graduation(2019);