SERP Snippet Tool
=================

Setup
-----

```bash
$ bower install
$ npm install
```

Test
----

```bash
$ npm test
```

Build
-----

```bash
$ grunt build
```

Run
---

Chrome:

  1. Open Tools -> Extensions
  2. Check the "Developer Mode" option (if not already)
  3. Select "Load unpacked extension"
  4. Navigate to the project `serp-preview-extension/dist/chrome` and click select

Firefox:

  1. Open Tools -> Add-ons
  2. Click "Debug Add-ons"
  3. Check the "Enable add-on debugging" option (if not already)
  4. Select "Load Temporary Add-on"
  5. Navigate to the project `serp-preview-extension/dist/firefox` and click open
  
Opera:

  1. View -> Show Extensions
  2. Click on "Developer Mode" button (if not already)
  3. Click on "Load Unpacked Extension..."
  4. Navigate to the project `serp-preview-extension/dist/chrome` and click select

Package
-------

```bash
$ grunt package
```

License
-------

The MIT License (MIT)
