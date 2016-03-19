var context = require.context('./app/client/common/', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;