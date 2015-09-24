var src = 'src';
var build = 'build';
var srcAssets = 'src/_assets';
var developmentAssets = 'build/assets';
var productionAssets = 'assets';

module.exports = {
  delete: {
    src: [developmentAssets]
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  bower: {
    dest: srcAssets,
    font: ['*.eot', '*.woff', '*.svg', '*.ttf'],
    image: ['*.gif', '*.png', '*.jpg', '*.jpeg'],
    js: ['*.js'],
    // scss: ['**/*.scss'],
    options: {
      debugging: true,
      includeDev: true,
      includeSelf: true,
      base: src + '/_bower_components',
    }
  },
  browsersync: {
    development: {
      proxy: "127.0.0.1:8888",
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/javascript/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  developmentAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/javascript/*.js',
      dest: productionAssets + '/javascript/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
  },
  sass: {
    src:  [srcAssets + '/scss/**/*.{sass,scss}', '!' + srcAssets + '/vendor/**/*.scss'],
    dest: developmentAssets + '/css',
    options: {
      bundle_exec: true,
      config_file: './config.rb',
      css: developmentAssets + '/css',
      sass: srcAssets + '/scss',
      sourcemap: true,
      logging: true
    }
  },
  watch: {
    sass: srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascript/**/*.js',
    images: srcAssets + '/images/**/*',
    svg: srcAssets + '/vectors/*.svg',
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  }
};
