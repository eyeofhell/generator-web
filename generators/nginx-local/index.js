var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('nginx.conf.tpl'),
      this.destinationPath('conf', 'nginx.conf')
    );
  }
});

