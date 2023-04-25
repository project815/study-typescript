class Department{
    // private id:string;
    // private name:string;
    private empolyee:string[] = [];

    constructor(private id:string, public name:string) {
        // this.id=
        // this.name = n;
    }

    describle(this: Department) {
        console.log(this);
        console.log(this.id);
        console.log(this.name);
        console.log('{this.id}'); //----------------------------------------------------------??왜 안되냐???
        // console.log('Department : (${this.name}): ' + ${this.name});
    }
    public addEmployee(empolyee:string)
    {
        this.empolyee.push(empolyee); 
    }

    printEmployeeInfomation()
    {
        console.log(this.empolyee.length)
        console.log(this.empolyee);
    }
}

const accunting = new Department('d1','?');
accunting.describle();

// console.log('Department : (${this.id}) : ${}'accunting);

accunting.addEmployee('Max');
accunting.addEmployee('Max');
accunting.addEmployee('Manu');
accunting.addEmployee('Manu');


// accunting.printEmployeeInfomation();
// const accuntingCopy = { name : name, descride : accunting.describle};

// accuntingCopy.descride(); 