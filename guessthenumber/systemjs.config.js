System.config({
    map : {
        'app': 'app',
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12',
        '@angular/common': 'https://unpkg.com/@angular/common@4.4.6',
        '@angular/compiler': 'https://unpkg.com/@angular/compiler@4.4.6',
        '@angular/core': 'https://unpkg.com/@angular/core@4.4.6',
        '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@4.4.6',
        '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@4.4.6'
    },
    packages:{
        'app':  { main: 'main.ts',  defaultExtension: 'ts' },
        '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
        '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
        '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
        '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    },
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    }
});