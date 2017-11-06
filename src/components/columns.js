const columns = [
  {
    id: 'title',
    Header: "Title",
    accessor: test => test.title
  },
  {
    id: 'description',
    Header: "Description",
    accessor: test => test.description
  },
  {
    id: 'category',
    Header: "Category",
    accessor: test => test.category
  },
  {
    id: 'score',
    Header: "Score",
    accessor: test => test.score
  },
  {
    id: 'severity',
    Header: "Severity",
    accessor: test => test.severity
  },
  {
    id: 'vulnerable',
    Header: "Vulnerable",
    accessor: test => test.vulnerable ? "yes" : "no"
  }
];

export default columns;