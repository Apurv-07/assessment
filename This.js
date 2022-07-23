class Object{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    helloName(){
        return `Hello ${this.a} ${this.b}` //This is a reference to the current object. This can be applied to any current object like window
    }
}
Student1=new Object("Apurv", "Prakash")
console.log(Student1.helloName())
