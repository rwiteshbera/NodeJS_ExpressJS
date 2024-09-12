const PromiseFunc = new Promise((resolve, reject) => {
     setTimeout(() => {
        // resolve([1,4,7]);
        reject("Something went wrong!")
     }, 2000);
})

PromiseFunc.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log("Error!", error);
})