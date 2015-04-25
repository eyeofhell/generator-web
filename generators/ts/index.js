var generators = require('yeoman-generator');
var install = require('./../../common/conditional_install');


module.exports = generators.Base.extend({

  initializing: function() {
    this.config.set('package', this.fs.readJSON('package.json'));
  },


  installingDeps: function () {
    install(this, 'jsx-typescript');
  },


  writingGrunt: function() {
    this.gruntfile.insertConfig('typescript', JSON.stringify({
      dist: {
        files: [
          {
            src: 'src/_references.ts',
            dest: 'public/app.js',
          },
        ],
      },
    }));
    require('./../../common/gruntfile_postprocess')(this);
  },


  writingFiles: function() {
    this.fs.copyTpl(
      this.templatePath('typescript.js'),
      this.destinationPath('grunt/typescript.js')
    );
  },


  writingPackage: function() {
    var package = this.fs.readJSON('package.json');
    if (!package.config) {
      package.config = {};
    }
    //  For typescript based subgenerators to validate.
    package.config.typescript = true;
    this.fs.writeJSON('package.json', package);
  },
});

