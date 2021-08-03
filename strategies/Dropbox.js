const DropboxStrategy = require("passport-dropbox-oauth2").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new DropboxStrategy(
    {
      apiVersion: "2",
      clientID,
      clientSecret,
      callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      if (handler) return handler(accessToken, refreshToken, profile, done)
      else return done(null, profile)
    }
  )
