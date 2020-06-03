// Promises - Asynchronous communication

//Immediate Promises
let myPromise = Promise.resolve('11');

myPromise.then((res) => {console.log(res)});

// New Promises

let newPromise = new Promise((resolve, reject) => {
    // return resolve(4);
    setTimeout(() => {
        resolve(7);
    }, 1000);
})

newPromise.then((res) => {
    res += 3;
    console.log(res);
});

// Complicated resoruce XmlHTTPrequest
function getData (method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                console.log(xhr);
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then((data) => {
    let resObj = JSON.parse(data);
    console.log(resObj);
}).catch(err => console.log(err));