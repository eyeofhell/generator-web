var generators = require('yeoman-generator');
var beautify = require('js-beautify').js_beautify;
var path = require('path');


module.exports = generators.Base.extend({
  installingGruntTs: function () {
    this.npmInstall(['grunt-ts'], {'save': true});
  },


  writingTsGrunt: function () {
    var _this = this;
    this.gruntfile.insertConfig('ts', JSON.stringify({
      dist: {
        files: [
          {
            src: 'src/_references.ts',
            outDir: 'public/app.js',
          },
        ],
      },
    }));
    this.env.runLoop.add('writing', function (done) {
      var data = _this.fs.read(_this.destinationPath('Gruntfile.js'));
      data = beautify(data, {indent_size: 2});
      _this.fs.write(_this.destinationPath('Gruntfile.js'), data);
      done();
    }, {once: 'gruntfile-postprocess:write'})
  },
});

