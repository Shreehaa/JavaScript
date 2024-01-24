async function asaw() {
    var promise = new Promise(function (response) {
        setTimeout(function () {
            response("Async function")
        }, 1000)
    })
    console.log(await promise)
}
asaw()
async function comment() {
    return new Promise(function (comm) {
        setTimeout(function () {
            comm("My first comment ...")
        }, 1000)
    })
}

async function like() {
    return new Promise(function (likes) {
        setTimeout(function () {
            likes("My first like *")
        }, 1000)
    })
}
async function post() {
    var load = new Promise(function (feed) {
        setTimeout(function () {
            feed("My first post (: ")
        }, 1000)
    })
    var [post,lk, comm] = await Promise.all([load,like(), comment()])
    console.log(post)
    console.log(lk)
    console.log(comm)
}
post()
