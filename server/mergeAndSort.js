const mergeAndSort = (report, spec) => {
  const tests = [];
  const keys = Object.keys(report.tests);
  keys.forEach(key => tests.push(Object.assign({}, {key: key}, report.tests[key], spec[key])));
  tests
    .sort((a, b) => a.score < b.score)
    .sort((a, b) => !a.vulnerable && b.vulnerable);
  report.tests = tests;

  return report;
}

module.exports = mergeAndSort;