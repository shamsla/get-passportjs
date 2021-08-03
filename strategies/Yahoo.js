const GoogleStrategy = require("passport-google-oauth2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) => {
  return new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    (token, tokenSecret, profile, done) => {
      if (handler) return handler(token, tokenSecret, profile, done)
      else return done(null, profile)
    }
  )
}
