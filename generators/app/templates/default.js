var _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerTask('default', function() {

    grunt.log.writeln("processing tasks ...");

    var tasks = _
      .reject(grunt.task._tasks, {name: 'default'})
      .map(function(task) {
        return {name: task.name, priority: +task.info.split(':')[1]};
      });

    if (_.any(tasks, {priority: NaN})) {
      return grunt.log.error("no priority for task '" + task.name + "'");
    }

    if (_.uniq(tasks, 'priority').length !== tasks.length) {
      return grunt.log.error("two or more tasks with same priority");
    }

    if (0 === tasks.length) {
      return grunt.log.writeln("no tasks found");
    }
    grunt.log.writeln("executing " + tasks.length + " tasks");

    _.each(tasks, function(task) {
      grunt.task.run(task.name);
    });
  });
}

