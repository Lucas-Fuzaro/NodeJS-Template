const exampleController = () => {
    return new Promise(async (resolve, reject) => {
        resolve({ success: true })
        reject({ success: false })
    })
}

module.exports = {
    exampleController: exampleController
}