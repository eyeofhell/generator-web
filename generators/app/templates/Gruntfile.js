module.exports = function(grunt) {
  grunt.initConfig({});
  grunt.loadTasks('./grunt');
  require('jit-grunt')(grunt);
  grunt.registerTask('default', [
    'automatic',
  ]);
};

