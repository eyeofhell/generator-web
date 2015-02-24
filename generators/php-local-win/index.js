var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('php.ini.tpl'),
      this.destinationPath('conf', 'php.ini')
    );
  }
});

