const TwitterStrategy = require("passport-twitter").Strategy

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) =>
  new TwitterStrategy(
    {
      consumerKey: clientID,
      consumerSecret: clientSecret,
      callbackURL: callbackURL,
    },
    function (token, tokenSecret, profile, done) {
      if (handler) return handler(token, tokenSecret, profile, done)
      else return done(null, profile)
    }
  )
