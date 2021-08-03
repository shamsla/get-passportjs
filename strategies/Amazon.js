const AmazonStrategy = require("passport-amazon").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new AmazonStrategy(
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
