const FacebookStrategy = require("passport-facebook").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) => {
  return new FacebookStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      if (handler) return handler(accessToken, refreshToken, profile, done)
      return done(null, profile)
    }
  )
}
