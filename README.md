# Exporter [WIP]

A utility to export pdf and csv files from your web app.

Exporter allows you to download pdf and csv files from strings or base64 encodings on your client.

# Usage

## Require

```
const exporter = require('exporter');
```

## ES6 import

```
import exporter from 'exporter';
```

## Named imports

```
import { downloadCSV, downloadCSVFromBase64, downloadPDFromBase64 }
```

# Examples

```
// Exporting CSV from string
downloadCSV(data, fileName);

// Exporting CSV from base64
downloadCSVFromBase64(data, fileName);

// Exporting PDF from base64
downloadPDFFromBase64(data, fileName);
```

# Contributing

Your inputs to the project are welcome. You can create an issue or send in a PR.

# License

[MIT](https://github.com/aviskarkc10/exporter/blob/master/LICENSE)

