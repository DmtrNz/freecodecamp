const delayWithError = (ms, errorMessage) => {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            reject()
        }, ms)
    )
}
delayWithError(3000, "Error")
    .then((errorMessage) => {
        console.log(errorMessage + "mo")
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })
