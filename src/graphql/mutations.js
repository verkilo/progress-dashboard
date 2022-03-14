/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      description
      status
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      description
      status
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      description
      status
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
        status
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
        status
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
        status
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
