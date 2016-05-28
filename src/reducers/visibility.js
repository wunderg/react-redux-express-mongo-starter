export const filterVisibility = (students, filter) => {
  switch (filter) {
    case 'Show All':
      return students;
    case 'Not-Assigned':
      return students.filter(item => item.instructor === 'None');
    case 'In-Progress':
      return students.filter(item => item.decision === 'Pending');
    case 'Not-Contacted':
      return students.filter(item => item.contacted === '');
    case 'Accepted':
      return students.filter(item => item.decision !== 'Pending');
    default:
      return students;
  }
};

export const filterInstructor = (students, instructor) => {
  switch (instructor) {
    case 'All':
      return students;
    default:
      return students.filter(item => item.instructor === instructor);
  }
};
