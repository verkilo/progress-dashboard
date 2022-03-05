/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      name
      description
      sessions {
        items {
          id
          date
          wordcount
          hours
          createdAt
          updatedAt
          projectSessionsId
        }
        nextToken
      }
      started_on
      finished_on
      published_on
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      name
      description
      sessions {
        items {
          id
          date
          wordcount
          hours
          createdAt
          updatedAt
          projectSessionsId
        }
        nextToken
      }
      started_on
      finished_on
      published_on
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      name
      description
      sessions {
        items {
          id
          date
          wordcount
          hours
          createdAt
          updatedAt
          projectSessionsId
        }
        nextToken
      }
      started_on
      finished_on
      published_on
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
      id
      date
      project {
        id
        name
        description
        sessions {
          nextToken
        }
        started_on
        finished_on
        published_on
        createdAt
        updatedAt
      }
      wordcount
      hours
      createdAt
      updatedAt
      projectSessionsId
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
      id
      date
      project {
        id
        name
        description
        sessions {
          nextToken
        }
        started_on
        finished_on
        published_on
        createdAt
        updatedAt
      }
      wordcount
      hours
      createdAt
      updatedAt
      projectSessionsId
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
      id
      date
      project {
        id
        name
        description
        sessions {
          nextToken
        }
        started_on
        finished_on
        published_on
        createdAt
        updatedAt
      }
      wordcount
      hours
      createdAt
      updatedAt
      projectSessionsId
    }
  }
`;
