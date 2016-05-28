export function mainData(students) {
  var data = students.reduce((result, item) => {
    if (!result[item.instructor]) {
      result[item.instructor] = { instructor: item.instructor };
      if (item.decision !== 'Accepted') {
        result[item.instructor].now = 1;
        result[item.instructor].accepted = 0;
      } else {
        result[item.instructor].accepted = 1;
        result[item.instructor].now = 0;
      }
      if (item.lesson > 4) {
        result[item.instructor].will = 1;
      } else {
        result[item.instructor].will = 0;
      }
    } else {
      if (item.decision !== 'Accepted') {
        result[item.instructor].now++;
      } else {
        result[item.instructor].accepted++;
      }
      if (item.lesson > 4) {
        result[item.instructor].will++;
      }
    }
    return result;
  }, {});
  return Object.keys(data).map(item => data[item]);
}

export function getTotal(students) {
  return students.reduce((result, item) => {
    if (item.decision === 'Accepted') {
      result.accepted++;
    }
    if (item.decision === 'Pending') {
      result.pending++;
    }
    if (item.lesson > 4) {
      result.will++;
    }
    return result;
  }, { accepted: 0, will: 0, pending: 0 });
}
