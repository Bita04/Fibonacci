const count=prompt("Enter a number");
function fib(n) {
    let f1 =0
    let f2 =1
    console.log(f1,f2);
    for (i=2 ; i<=n ; i++){
        let f3=f1+f2;
        f1=f2;
        f2=f3;
        console.log(f3)
    }
    
}
fib(count)