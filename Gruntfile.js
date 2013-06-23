/*global module:false*/
module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
          combine: {
            files: {
              'static/css/style.min.css': ['static/css/normalize.css', 'static/css/typo.css', 'static/css/style.css']
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin']);
};
