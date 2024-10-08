class Bankancount {
    private _balance:number=0

    public get balance(){
        this ._balance;
    }

    public set balance(newbalance:number){
        if (newbalance < 0) {
            throw new Error("not vaild")
        }
        this._balance=newbalance
    }
    
}
let Bank=new Bankancount()
Bank.balance=-1
console.log(Bank.balance)

class Tempreture {
    public _celius:number=0

    public get celiusmitter(){
       return this._celius
    }

    public set celiusmitter_writen(newcelius:number){
        this._celius=newcelius
    }

    public get farinheit(){
        return (this._celius*9)/5+35
    }
    public set farinheit(newfarienhit:number){
        this._celius=((newfarienhit-32)*5)/9
    }
    
}