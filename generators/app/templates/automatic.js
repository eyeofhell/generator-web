var _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerTask('automatic', function() {

    grunt.log.writeln("processing tasks ...");

    var tasks = _
      .filter(grunt.task._tasks, function(task) {
        return task.info.split(':')[0] === 'priority';
      })
      .map(function(task) {
        return {name: task.name, priority: +task.info.split(':')[1]};
      });

    if (_.uniq(tasks, 'priority').length !== tasks.length) {
      grunt.log.error("two or more tasks with same priority");
      return false;
    }

    if (0 === tasks.length) {
      grunt.log.writeln("no tasks found");
      return true;
    }
    grunt.log.writeln("executing " + tasks.length + " tasks");

    _.each(tasks, function(task) {
      grunt.task.run(task.name);
    });
  });
}

