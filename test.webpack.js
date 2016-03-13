//Use to load Test file By Karma
var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);