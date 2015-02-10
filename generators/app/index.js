var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Gruntfile.js.tpl'),
      this.destinationPath('Gruntfile.js')
    );
  }
});

