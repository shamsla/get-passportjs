const GoogleStrategy = require("passport-google-oauth2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) => {
  return new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    (request, accessToken, refreshToken, profile, done) => {
      if (handler) return handler(accessToken, refreshToken, profile, done)
      else return done(null, profile)
    }
  )
}
