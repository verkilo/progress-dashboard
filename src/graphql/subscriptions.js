/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($owner: String) {
    onCreateSession(owner: $owner) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($owner: String) {
    onUpdateSession(owner: $owner) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($owner: String) {
    onDeleteSession(owner: $owner) {
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
