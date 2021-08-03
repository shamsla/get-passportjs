const ActiveDirectoryStrategy = require('passport-activedirectory')

module.exports = ({url, baseDN, username, password, handler = null}) => new ActiveDirectoryStrategy({
  integrated: false,
  ldap: {
    url,
    baseDN,
    username,
    password
  }
},(profile, ad, done) => {
  ad.isUserMemberOf(profile._json.dn, 'AccessGroup', function (err, isMember) {
    if (err) return done(err)
    
    if (handler) return handler(profile, ad, done)
    done(null, profile)
  })
})