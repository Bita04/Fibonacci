// const a =prompt("Enter your Number :")
// const b = prompt("How many digits does it show..?")
// round =(a,b) => {
//         let c=[ a.toString().split('.')]
//         splitOn(c[1] , b)
//         c[0].concat(c[1])  
//         return c[0];
// };
// round(a,b)

const a =prompt("Enter your Number :")
const b = prompt("How many digits does it show..?")
const splitOn = (slicable, ...indices) =>
  [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));
round =(a,b) => {
        let c=[ a.toString().split('.')]
        splitOn(c[1] , b)
        c[0].concat(c[1])  
        return c[0];
};
round(a,b)