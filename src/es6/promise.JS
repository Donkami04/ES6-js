const anotherFunction = () => {
    return new Promise ((resolve, reject) => {
        if (false){
            resolve('Heeeey!!');
        } else {
            reject('Pailas brody');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

