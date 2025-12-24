// Immediately Invoked Function Expression (IIFE)
// we use iife to avoid global pollution 
 (function chai() {
     console.log(`DB Connected`)
 })();

(function name() {
    // named iife
  //let secret = "hidden";
  console.log("secret");
})()

;( () => {
  let secret = "hidden";
  console.log(secret);
})()

;( (secret) => {
  //let secret = "hidden";
  console.log(`Hey I have secret ${secret}`);
})("vijay")

