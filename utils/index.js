const passport = require("passport")
const session = require("express-session")

module.exports = {
  initPassport(app) {
    app.use(passport.initialize())
  },
  initPassportSession(app, sessionSecret) {
    app.use(session({ secret: sessionSecret }))
    app.use(passport.session())

    passport.serializeUser(function (user, done) {
      done(null, user)
    })

    passport.deserializeUser(function (id, done) {
      done(null, false)
    })
  },
  useStrategies(...strategies) {
    for (s of strategies) {
      passport.use(s)
    }
  },
}
