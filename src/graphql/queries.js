/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        project {
          id
          name
          description
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
      nextToken
    }
  }
`;
