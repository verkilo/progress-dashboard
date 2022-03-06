/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      owner
      ownerId
      name
      description
      startingWordcount
      targetWordcount
      finishedWordcount
      sessions {
        items {
          id
          date
          wordcount
          duration
          comment
          createdAt
          updatedAt
          projectSessionsId
          owner
        }
        nextToken
      }
      startedOn
      expectedOn
      finishedOn
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
        owner
        ownerId
        name
        description
        startingWordcount
        targetWordcount
        finishedWordcount
        sessions {
          nextToken
        }
        startedOn
        expectedOn
        finishedOn
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
      wordcount
      duration
      comment
      project {
        id
        owner
        ownerId
        name
        description
        startingWordcount
        targetWordcount
        finishedWordcount
        sessions {
          nextToken
        }
        startedOn
        expectedOn
        finishedOn
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectSessionsId
      owner
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
        wordcount
        duration
        comment
        project {
          id
          owner
          ownerId
          name
          description
          startingWordcount
          targetWordcount
          finishedWordcount
          startedOn
          expectedOn
          finishedOn
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        projectSessionsId
        owner
      }
      nextToken
    }
  }
`;
