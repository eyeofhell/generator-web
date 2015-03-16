var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('typescript', 'priority: 100', function() {
    var done = this.async();
    var files = this.files.slice();

    //  Spawn tsc task that process one item in 'files' and calls this
    //  function on completion.
    function spawn(error, result, resultString) {
      if (error) {
        console.log(result.stdout);
        return done(false);
      }
      if (0 === files.length) return done();

      var file = files.shift();
      if (1 !== file.src.length || null === file.dest) {
        grunt.log.error("one src and dest not specified");
        return spawn();
      }

      grunt.log.writeln("tsc: " + file.src[0] + " => " + file.dest);
      var cmd = path.join('node_modules', '.bin', 'jsx-tsc.cmd');
      var args = [
        file.src[0],
        '--out',
        file.dest,
        '--outDir',
        path.join(__dirname, 'tmp', 'ts'),
        '--module',
        'commonjs',
      ];
      grunt.util.spawn({cmd: cmd, args: args}, spawn);
    }
    //  Start processing files.
    spawn();
  });
}

