"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("../config"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
(0, _routes.routes)(app);
_mongoose.default.connect(_config.default.connexionString).then(() => {
  app.listen(4000, () => {
    console.log("listening on port 4000");
  });
}).catch(error => {
  console.log(error);
});