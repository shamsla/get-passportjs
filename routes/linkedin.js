const router = require("express").Router()
const passport = require("passport")

let config = {
  name: "linkedin",
}

router.get("/auth", passport.authenticate(config.name))

router.get(
  "/callback",
  (req, res, next) => {
    return passport.authenticate(config.name, { session: config.useSession })(
      req,
      res,
      next
    )
  },
  (req, res, next) => {
    if (config.callbackMiddleware)
      return config.callbackMiddleware(req, res, next)
    else if (req.user) return res.redirect(config.successRedirect)
    else res.redirect(config.failureRedirect)
  }
)

module.exports = ({
  callbackMiddleware = null,
  successRedirect = null,
  failureRedirect = null,
  useSession = true,
}) => {
  config.successRedirect = successRedirect
  config.failureRedirect = failureRedirect
  config.callbackMiddleware = callbackMiddleware
  config.useSession = useSession
  return router
}
