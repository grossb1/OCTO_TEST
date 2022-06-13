const courses = [
  {
    id: 1,
    title: 'Securing React Apps with Auth0',
    slug: 'react-auth0-authentication-security',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 2,
    title: 'React: The Big Picture',
    slug: 'react-big-picture',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 3,
    title: 'Creating Reusable React Components',
    slug: 'react-creating-reusable-components',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 4,
    title: 'Building a JavaScript Development Environment',
    slug: 'javascript-development-environment',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 5,
    title: 'Building Applications with React and Redux',
    slug: 'react-redux-react-router-es6',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 6,
    title: 'Building Applications in React and Flux',
    slug: 'react-flux-building-applications',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 7,
    title: 'Clean Code: Writing Code for Humans',
    slug: 'writing-clean-code-humans',
    authorId: 1,
    category: 'Software Practices',
  },
  {
    id: 8,
    title: 'Architecting Applications for the Real World',
    slug: 'architecting-applications-dotnet',
    authorId: 1,
    category: 'Software Architecture',
  },
  {
    id: 9,
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    slug: 'career-reboot-for-developer-mind',
    authorId: 1,
    category: 'Career',
  },
  {
    id: 10,
    title: 'Web Component Fundamentals',
    slug: 'web-components-shadow-dom',
    authorId: 1,
    category: 'HTML5',
  },
];

const authors = [
  { id: 1, name: 'Cory House1' },
  { id: 2, name: 'Scott Allen2' },
  { id: 3, name: 'Dan Wahlin3' },
];

const newCourse = {
  id: null,
  title: '',
  authorId: null,
  category: '',
};

const allSets = [
  {
    GUID: 1001,
    setTerm: 'Depression',
    setType: 'Value Set',
    creator: 'Cora Bernard',
    reviewer: 'Jodie Trafton',
    SME: 'John McCarthy',
    organization: 'PERC',
    description: 'Depression',
    status: 'Working',
  },
  {
    GUID: 1002,
    setTerm: 'CLC',
    setType: 'Value Set',
    creator: 'Amy Robinson',
    reviewer: 'Jodie Trafton',
    SME: 'John McCarthy',
    organization: 'SMITREC',
    description: 'CLC',
    status: 'Development',
  },
  {
    GUID: 1003,
    setTerm: 'Opioids',
    setType: 'Super Set',
    creator: 'Susana Martins',
    reviewer: 'Rebecca Stephens',
    SME: 'John McCarthy',
    organization: 'NEPEC',
    description: 'Codes for depression per elix hauser',
    status: 'Validated',
  },
  {
    GUID: 1004,
    setTerm: 'Ira variable',
    setType: 'Concept',
    creator: 'David Write',
    reviewer: 'Shalini Gupta',
    SME: 'John McCarthy',
    organization: 'PERC',
    description: 'Possible something from the Ira files',
    status: 'Production',
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  allSets,
};
