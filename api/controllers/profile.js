const mongoose = require('mongoose');
const User = require('User');


module.exports.profileRead = (req, res) => {
    //if no user ID exist in the JWT return a 401
    if (!req.payload._id) {
        res.status(401).json({
            message: 'UnauthorizedError: private profile'
        });
    } else {
        //Otherwise continue with it
        User.findById(req.payload._id).exec(function(err, user) {
            res.status(200).json(user);
        });
    }
  };
  