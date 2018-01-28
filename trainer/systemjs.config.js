(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'dist', // 'dist',
    'rxjs': 'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    'ngx-modialog':             'node_modules/ngx-modialog/bundle',
    'ngx-modialog/plugins/bootstrap': 'node_modules/ngx-modialog/plugins/bootstrap/bundle'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'bootstrap.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ngx-modialog': {main: 'ngx-modialog.rollup.umd.min.js', defaultExtension: 'js'},
    'ngx-modialog/plugins/bootstrap': {main: 'ngx-modialog-bootstrap.rollup.umd.min.js', defaultExtension: 'js'}
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'testing',
    'router'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
