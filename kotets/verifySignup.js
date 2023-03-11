const db = require("./collectionModel");
const User = db.User;

checkDuplicateUsername = (req, res, next) => {
  // Username
  User.findOne({
    userName: req.body.userName
  }).then(user=>{
    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
  }
  );
  next();
};


module.exports.checkDuplicateUsername = checkDuplicateUsername;