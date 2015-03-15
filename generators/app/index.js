var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
  }
});

