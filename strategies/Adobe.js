const AdobeStrategy = require("passport-adobe-oauth2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new AdobeStrategy(
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
