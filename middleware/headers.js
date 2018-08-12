module.exports = (req, res, next) => {

    res.header("access-control-allow-origin", "*")
    res.header("access-control-allow-methods", "GET, POST, PUT, DELETE")
    res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

//    if (req.method == "OPTIONS") {
//         next();
//     } else {
//         res.status(200).json(req.headers.authorization);
//         next();
//     }
}
