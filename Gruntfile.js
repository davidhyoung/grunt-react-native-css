/*
 * grunt-react-native-css
 * https://github.com/feedly/grunt-react-native-css
 *
 * Copyright (c) 2016 devHD
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    react_native_css: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options.js': ['test/fixtures/style.css'],
        },
      },
      custom_options: {
        options: {
          pretty: true,
          literal:true,
        },
        files: {
          'tmp/custom_options.js': ['test/fixtures/style.scss']
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'react_native_css', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
