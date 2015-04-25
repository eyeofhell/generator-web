var generators = require('yeoman-generator');
var install = require('./../../common/conditional_install');

module.exports = generators.Base.extend({

  initializing: function() {
    this.config.set('package', this.fs.readJSON('package.json'));
  },


  installingDeps: function () {
    install(this, 'lodash');
    install(this, 'jit-grunt');
  },


  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('automatic.js'),
      this.destinationPath('grunt', 'automatic.js')
    );
  }
});

