// timestamp.js 

function getTimestampStr() {
  var curDate = new Date();
  return curDate.toISOString().replace(/(\W+)/g, '');
}

function getURLStr(urlString) {
  return urlString.replace(/([^A-Za-z0-9])+/g, '_');
}

function getFilePath(path, timestamp, url, ext)    {
  return path + timestamp + '__' + url + '.' + ext;
}

module.exports = { getTimestampStr, getURLStr, getFilePath }