var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  initializing: function() {
    var package = this.fs.readJSON('package.json');
    if (!package.config || true !== package.config.typescript) {
      return this.env.error("project is not typescript, use 'yo web:ts'");
    }
  },
});

