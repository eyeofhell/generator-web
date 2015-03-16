var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  installingDeps: function () {
    this.npmInstall(['jsx-typescript'], {'save': true});
  },


  writingGrunt: function () {
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


  writingTask: function () {
    this.fs.copyTpl(
      this.templatePath('typescript.js'),
      this.destinationPath('grunt/typescript.js')
    );
    this.fs.copyTpl(
      this.templatePath('_references.ts'),
      this.destinationPath('src/_references.ts')
    );
  }
});

