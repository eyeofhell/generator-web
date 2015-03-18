var generators = require('yeoman-generator');
var install = require('./../../common/conditional_install');
var addTsReference = require('./../../common/add_ts_reference');


module.exports = generators.Base.extend({

  initializing: function() {
    var package = this.fs.readJSON('package.json');
    this.config.set('package', package);
    if (!package.config || true !== package.config.typescript) {
      return this.env.error("project is not typescript, use 'yo web:ts'");
    }
  },


  installingDeps: function () {
    install(this, 'express');
  },


  writingFiles: function() {
    this.fs.copyTpl(
      this.templatePath('webserver.ts'),
      this.destinationPath('src', 'webserver.ts')
    );
  },


  writingReferences: function() {
    addTsReference(this, 'webserver.ts');
  },
});

