const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2").Strategy
const jwt = require("jsonwebtoken")

module.exports = ({clientID, clientSecret, callbackURL, handler = null}) => {
  return new AzureAdOAuth2Strategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    function (accessToken, refreshToken, params, p, done) {
      const info_jwt = params.id_token
      const profile = jwt.decode(info_jwt)

      if (!profile) throw Error("Invalid Profile JWT!")

      if (handler) return handler(accessToken, refreshToken, profile, done)
      else return done(null, info_jwt)
    }
  )
}
