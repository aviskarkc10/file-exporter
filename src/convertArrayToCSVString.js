export function convertArrayToCSVString (data) {
  if (!data.length) {
    return '';
  }
  const keys = Object.keys(data[0]);
  const keysWithFirstUpper = keys.map(key => key.replace(/^\w/, (letter) => letter.toUpperCase()))
  let csvString = keysWithFirstUpper.join(',');
  csvString += '\n';

  data.forEach((value) => {
    keys.forEach(key => {
      csvString += value[key] + ',';
    })
    csvString = csvString.replace(/,$/, '\n');
  });

  return csvString;
}
