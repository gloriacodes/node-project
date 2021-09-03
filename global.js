

// console.log(global);

setTimeout(() => {
    console.log(`in the timeout`)
    clearInterval(int);
}, 4000);
  

const int = setInterval(() => {
    console.log(`in the invertal`)
}, 2000);