class Department{
    // private id:string;
    // private name:string;
    private empolyee:string[] = [];

    constructor(protected readonly id:string, public name:string) {
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
        // this.id = "ss";//읽기 전용!!
        this.empolyee.push(empolyee); 
    }

    printEmployeeInfomation()
    {
        console.log(this.empolyee.length)
        console.log(this.empolyee);
    }
}

class ITDepartment extends  Department{
    admins:string[];
    constructor(id:string, admins:string[]){
        super(id, 'IT');
        this.admins = admins; 
        //private admins:string 약식 처리 가능,, super을 먼저 쓰고 this를 할당해야 한다.
    }

    printInfo()
    {
        console.log('Department :' + this.id + " " + this.name);
    }
}

class AccountingDepartment extends  Department{
    constructor(id:string, private report:string[]){
        super(id, 'Accounting');
        //private admins:string 약식 처리 가능,, super을 먼저 쓰고 this를 할당해야 한다.
    }
    addReport(text:string)
    {
        this.report.push(text);
    }
    printReport()
    {
        console.log(this);
    }
}

const it = new ITDepartment('d1', ['Max']);
const accunting = new AccountingDepartment('d2',['Steve'])

it.printInfo();
// console.log('Department : (${this.id}) : ${}'accunting);

it.addEmployee('Max');
it.addEmployee('Max');
it.addEmployee('Manu');
it.addEmployee('Manu');

it.describle();
accunting.addEmployee('asdf');
accunting.printReport();

// accunting.printEmployeeInfomation();
// const accuntingCopy = { name : name, descride : accunting.describle};

// accuntingCopy.descride(); 