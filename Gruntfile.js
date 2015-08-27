// Generated on 2014-09-20 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['js/**/*.js'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['theme/css/**/*.css'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['*.html'],
                options: {
                    livereload: true
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, src: ['js/mathjax/**'], dest: '<%= yeoman.dist %>/'},
                ]
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['index.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: '<%= yeoman.dist %>/js'
                }, {
                    expand: true,
                    cwd: '.',
                    src: 'slide_config.js',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'theme/css',
                    src: ['default.css'],
                    dest: '<%= yeoman.dist %>/theme/css'
                }]
            }
        },

        'gh-pages': {
            options: {
                base: '<%= yeoman.dist %>'
            },
            src: ['**']
        },
    });

    grunt.registerTask('default', 'Compile then start a connect web server', function(target) {
        grunt.task.run([
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'copy',
        'imagemin',
        'svgmin',
        'htmlmin',
        'uglify',
        'cssmin'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);
};
