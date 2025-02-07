// function fetchData (str){
//     return new Promise(function (resolve, reject){
//         setInterval(function(){
//             resolve(str);
//         }, 1000)
//     })
// }
// fetchData('Start')
//     .then((result)=>{
//         console.log(result)
//         return 10
//     })
//     .then((result)=>{
//         console.log(result)
//         return fetchData('Middle')
//     })
//     .then((result)=>{
//         console.log(result)
//         return fetchData('End')
//     })
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log("Operation completed")
//     })

const fetchData = str =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(str);
        }, 1000);
    });

fetchData('Start')
    .then(data => {
        console.log('Step 1:', data);
        return 10;
    })
    .then(data => {
        console.log('Step 2:', data);
        return fetchData('Middle');
    })
    .then(data => {
        console.log('Step 3:', data);
        return fetchData('End');
    })
    .then(data => {
        console.log('Step 4:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Operation completed');
    });