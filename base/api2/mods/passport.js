const passportJWT = require("passport-jwt");
const { query } = require("./dbconnection");
const jwt = require("jsonwebtoken");

var JwtStrategy = passportJWT.Strategy,
  ExtractJwt = passportJWT.ExtractJwt;

var secretKey = "thisisscretkeyy";

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

const verifyUser = async (payload, done) => {
  try {
    // const user = await query(`SELECT * FROM TB_MEMBER WHERE mid=?;`, [
    //   payload.mid,
    // ]);

    const user = [{ mid: "user", name: "name" }];

    if (user.length == 1) {
      return done(null, user[0]);
    } else {
      return done(null, false);
    }
  } catch (e) {
    console.log(e);

    return done(null, false);
  }
};

module.exports = {
  passportConfig: (passport) => {
    passport.serializeUser(function (user, done) {
      done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      done(null, user);
    });

    passport.use(new JwtStrategy(opts, verifyUser));
  },
  passportCreate: (jsondata) => {
    const token = jwt.sign(jsondata, secretKey);
    return token;
  },
};
