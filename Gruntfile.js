module.exports = function (grunt) { 
'use strict';
 require('load-grunt-tasks')(grunt);

 
grunt.initConfig({
  jshint: {
            options: {
              sub: true,
			  asi: true
			  },
			all: [
				'Gruntfile.js', 'src/js/perfmatters.js'
			]
			
		},
	

		
  //This plugin is used to minify js files. The dist folder is where the minified files are stored.
  //src folder contains the files to be minified.
  uglify: {
   dist: {
      files: {
         'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
		 'dist/views/js/main.js': ['src/views/js/main.js']
      }
   }
},

//This plugin is used minify css files.The dist folder is where the minified files are stored.
//src folder contains the files to be minified.
  cssmin: {
    dist: { 
      files: {
         'dist/css/style.min.css': ['src/css/style.css'],
		 'dist/css/print.min.css': ['src/css/print.css'],
		 'dist/views/css/style.min.css': ['src/views/css/style.css'],
		 'dist/views/css/bootstrap-grid.min.css': ['src/views/css/bootstrap-grid.css'],
		 
      }
  }
},


//This is to minify html files. The dist folder is where the minified files are stored.
//src folder contains the files to be minified.
htmlmin: {
   dist: {
      options: {
         removeComments: true,
         collapseWhitespace: true,
		 minifyCSS: true
      },
      files: {
         'dist/index.html': 'src/index.html',
		 'dist/project-2048.html': 'src/project-2048.html',
		 'dist/project-mobile.html': 'src/project-mobile.html',
		 'dist/project-webperf.html': 'src/project-webperf.html',
		 'dist/views/pizza.html': 'src/views/pizza.html'
      }
   }
},

});
grunt.registerTask('default', [
		'jshint',
		'htmlmin',
		'cssmin',
		'uglify'

	]);


};
