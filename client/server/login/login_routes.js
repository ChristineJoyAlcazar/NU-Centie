const { GiConsoleController } = require("react-icons/gi");
const pool = require("../config/database.js");
const router = require("express").Router();

require("dotenv").config();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  pool.query(
    `SELECT * FROM users WHERE user_email=? AND user_password=?`,
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length == 1) {
          console.log("login success");
          res.send(result);
        } else if (result.length == 0) {
          console.log("no existing account");
          res.send("no existing account");
        } else {
          console.log("more than 1 acc existed");
          res.send("more than 1 acc existed");
        }
      }
    }
  );
});

router.post("/register", (req, res) => {
  const { fname, lname, email, contactNumber, address, password } = req.body;
  pool.query(
    "INSERT INTO users (user_fname, user_lname, user_email, user_contact, user_address, user_password, user_role) VALUES (?,?,?,?,?,?,?)",
    [fname, lname, email, contactNumber, address, password, "User"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("user added");
        res.send(result);
      }
    }
  );
});
module.exports = router;
