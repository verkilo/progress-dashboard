/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
