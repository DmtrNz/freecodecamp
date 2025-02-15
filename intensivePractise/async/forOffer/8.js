console.log('start')//1

const fn = () => (new Promise((resolve, reject) => {
    console.log(1); //3
    resolve('success')
}))

console.log('middle') //2

fn().then(res => {
    console.log(res)//5
})

console.log('end') //4

//start, middle, 1, end, success