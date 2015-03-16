var beautify = require('js-beautify').js_beautify;

//  Beautify gruntfile at end of yo (default yo gruntfile modifications
//  adds 4 spaces per indent).
module.exports = function(task) {
  task.env.runLoop.add('writing', function (done) {
    var data = task.fs.read(task.destinationPath('Gruntfile.js'));
    data = beautify(data, {indent_size: 2});
    task.fs.write(task.destinationPath('Gruntfile.js'), data);
    done();
  }, {once: 'gruntfile-postprocess:write'})
}

