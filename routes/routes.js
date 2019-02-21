const router = require('express').Router()


const routeController = () => {

    router.route('example')
        .post(example)

    return router

}

const example = () => {
    console.log("Example Function")
}

module.exports = routeController();