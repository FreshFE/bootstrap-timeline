'use strict';

module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'docs/stylesheets/docs.css': 'docs/stylesheets/docs.scss'
				},
				options: {
					noCache: true,
					style: 'expanded'
				}
			}
		},

		watch: {
			css: {
				files: 'docs/*.scss',
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
}