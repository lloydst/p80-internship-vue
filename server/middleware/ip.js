module.exports = function (req, res, next) {
    // req is the Node.js http request object
    if(req.ip === '127.0.0.1') {
        res.redirect('/channels/entrance')
    }
    // next()
}