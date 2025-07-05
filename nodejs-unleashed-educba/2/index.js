let x = 0;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (x == 1)
            resolve("This promise was resolved")
        else
            reject("This promise was rejected")
    }, 3000)
})


myPromise.then((msg)=>{console.log(msg)})
.catch((msg)=>{console.log(msg)})

let myMessage = "msg: ";

async function code() {
    try {
        myMessage += await myPromise;
        console.log(myMessage)
    }
    catch (e) {
        console.log(e)
    }
}

code();