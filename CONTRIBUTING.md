Contributing
============

Welcome, so you are thinking about contributing?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:williambelle/serp-snippet-tool.git
cd serp-snippet-tool
npm i
```

Test
----

```bash
npm t
```

Build
-----

```bash
npm run build
```

or

```bash
npm run serve
```

to update source continuously.

Run
---

Chrome:

1. Open Tools -> Extensions
1. Check the "Developer Mode" option (if not already)
1. Select "Load unpacked extension"
1. Navigate to the project `serp-preview-extension/dist/chrome` and click select

Firefox:

1. Open Tools -> Add-ons
1. Click "Debug Add-ons"
1. Check the "Enable add-on debugging" option (if not already)
1. Select "Load Temporary Add-on"
1. Navigate to the project `serp-preview-extension/dist/firefox` and click open

Opera:

1. View -> Show Extensions
1. Click on "Developer Mode" button (if not already)
1. Click on "Load Unpacked Extension..."
1. Navigate to the project `serp-preview-extension/dist/chrome` and click select

Package
-------

```bash
npm run package
```

License
-------

The MIT License (MIT)
