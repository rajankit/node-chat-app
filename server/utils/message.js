const moment = require('moment');
// var getTimeStamp = moment().valueOf();
// var createdAt = getTimeStamp.format('MMMM Do, YYYY, h:mm a');
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};
module.exports = { generateMessage,generateLocationMessage };
