var _ = require('lodash');

module.exports = function(task, name) {
  var package = task.config.get('package');
  if (package && package.dependencies) {
    if (_.includes(_.keys(package.dependencies), name)) {
      return task.log("skipping '" + name + "': already installed");
    }
  }
  return task.npmInstall(name, {'save': true});
};

