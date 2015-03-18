var _ = require('lodash');

var SIGNATURE_BEGIN = "//{module-references-begin}";
var SIGNATURE_END = "//{module-references-end}";

module.exports = function(task, filename) {
  //  Reference name is a filename without extension.
  var reference = filename.replace(/\.[^.]+$/, '');
  var referenceStr = '/// <reference path = "' + reference + '"/>';

  var data = task.fs.read(task.destinationPath('src', '_references.ts'));
  var lines = data.split('\n');

  var beginIndex = _.findIndex(lines, _.matches(SIGNATURE_BEGIN));
  var endIndex = _.findIndex(lines, _.matches(SIGNATURE_END));
  if (-1 === beginIndex || -1 === endIndex || endIndex <= beginIndex) {
    return task.env.error("meta comment not found in _references.ts");
  }

  var references = lines.slice(beginIndex + 1, endIndex);
  if (_.includes(references, referenceStr)) {
    return task.log("skipping '" + filename + "': already referenced");
  }

  lines.splice(endIndex, 0, referenceStr);
  data = lines.join('\n');
  task.fs.write(task.destinationPath('src', '_references.ts'), data);
};


