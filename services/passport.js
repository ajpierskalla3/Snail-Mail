const passport = require("passport");
const GoogleStrategy = require("passport-google-Oauth20").Strategy;
// const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "11505148976-ioh36chs13d01nqc23h78ce290pn6gnv.apps.googleusercontent.com",
      clientSecret: "W1S7JuAavOEMfKNUlYN6NhFd",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("1", accessToken);
      console.log("2", refreshToken);
      console.log("3", profile);
    }
  )
);
