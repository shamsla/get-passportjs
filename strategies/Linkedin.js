const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler=null}) =>
  new LinkedInStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    function (accessToken, refreshToken, profile, done) {
      if (handler) return handler(accessToken, refreshToken, profile, done)
      else return done(null, profile)
    }
  )
