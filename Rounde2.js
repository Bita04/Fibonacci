// Write a JavaScript program to round a number to a specified amount of digits.
const a=prompt("Enter your number:");
const b=prompt("how many digits do you want to show..?")

round=(a,b)=>{
    b++
    const c =a.split(".")
    const d=c[1].split(b)
    if (d[0][b-1]>5){
        d[0][b-1]--
    }
    const e =`${c[0]}/${d[0]}`
    console.log(e);
}
round(a,b);