

const authorized = (permittedRole) => {
    return (req, res, next) => {

        const user = req.user
        let isPermited = false;

        permittedRole.map(role => {
            if (user.role.includes(role)) {
                isPermited = true
            }
        })
        if (isPermited) {
            return next()
        }
        else {
            return res.status(401).send({ message: "You are not authorized" })
        }
    }
}

module.exports = authorized;