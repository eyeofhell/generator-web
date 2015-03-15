var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('nginx.conf'),
      this.destinationPath('conf', 'nginx.conf')
    );
    this.fs.copyTpl(
      this.templatePath('mime.types'),
      this.destinationPath('conf', 'mime.types')
    );
    this.fs.copyTpl(
      this.templatePath('fastcgi_params'),
      this.destinationPath('conf', 'fastcgi_params')
    );
    //  For nginx to start.
    this.mkdir('logs');
    this.mkdir('temp');
  }
});

