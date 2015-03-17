var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

  initializing: function() {
    var package = this.fs.readJSON('package.json');
    if (!package.config || true !== package.config.typescript) {
      return this.env.error("project is not typescript, use 'yo web:ts'");
    }
  },

  installingDeps: function() {
    this.npmInstall(['express'], {'save': true});
  },

  writingFiles: function() {
    this.fs.copyTpl(
      this.templatePath('webserver.ts'),
      this.destinationPath('src', 'webserver.ts')
    );
  }
});

