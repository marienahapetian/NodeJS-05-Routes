const fs = require("fs");
const path = require("path");
const moment = require("moment");
function Logger(req, res, next) {
	let content = fs.readFileSync(path.join(__dirname, "../logger.txt"));
	content += `Date: ${moment().format("LLLL")}      ${req.method}      ${req.originalUrl}\n`;

	fs.writeFileSync(path.join(__dirname, "../logger.txt"), content);
	next();
}

module.exports = Logger;
