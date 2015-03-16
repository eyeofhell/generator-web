var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

  installingDeps: function () {
    this.npmInstall(['lodash'], {'save': true});
    this.npmInstall(['jit-grunt'], {'save': true});
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
      this.templatePath('default.js'),
      this.destinationPath('grunt', 'default.js')
    );
  }
});

