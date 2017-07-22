var express = require('express'),
	app = express(),
	xdb = require('express-db'),
	server = require('http')
		.createServer(app)
		.listen(8081);

app.use(xdb.init("demo DB", {
	file: 'authentication.db.json',
	restrictAccess: false, //restrict access via browser
	autoSave: true, //autosave enabled
	backupInterval: 60000, //interval in ms,
	viewCaching: true //cache views then requested
}));

xdb.info();
