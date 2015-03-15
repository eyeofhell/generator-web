module.exports = function(grunt) {
  grunt.initConfig({
  });
  grunt.registerTask('default', function() {
    for(var key in grunt.task._tasks) {
      console.log(key, grunt.task._tasks[key]);
    }
  });
};

