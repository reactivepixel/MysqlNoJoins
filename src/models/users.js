const db = require('./db');

exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
}

exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
}

exports.find = (payload, err, success) => {
  db.user.find({
    where: payload,
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}
