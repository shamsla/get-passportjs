const GitHubStrategy = require("passport-github2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new GitHubStrategy(
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
