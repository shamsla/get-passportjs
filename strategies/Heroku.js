const HerokuStrategy = require("passport-heroku").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new HerokuStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      if (handler) return handler(accessToken, refreshToken, profile, done)
      else return done(null, profile)
    }
  )
