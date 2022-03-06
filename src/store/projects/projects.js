import { API, graphqlOperation, Storage } from "aws-amplify";
import { createProject as createProjectMutation } from "@/graphql/mutations";
import { updateProject as updateProjectMutation } from "@/graphql/mutations";
import { getProject as getProjectQuery } from "@/graphql/queries";
import { listProjects as listProjectsQuery } from '@/graphql/queries';
// import { createPhoto as createPhotoMutation } from "@/graphql/mutations";
// import { uuid } from "uuidv4";
// import awsconfig from "@/aws-exports";

export const projectInfo = {
  namespaced: true,
  state: { projects: null, error: null },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    async createProject({ dispatch }, newProject) {
      try {
        await API.graphql(graphqlOperation(createProjectMutation, { input: newProject }))
        dispatch("getProjectsData");
      } catch (error) {
        console.error("createproject", error)
      }
    },
    async updateProject({ dispatch }, project) {
      try {
        await API.graphql(graphqlOperation(updateProjectMutation, { input: project }))
        dispatch("getProjectsData");
      } catch (error) {
        console.error("updateproject", error)
      }
    },
    async getProject(_, projectId) {
      return await API.graphql(
        graphqlOperation(getProjectQuery, { id: projectId })
      )
    },
    async getProjectsData({ commit }) {
      const projectsData = await API.graphql(graphqlOperation(listProjectsQuery));
      commit("setProjects", projectsData.data.listProjects.items);
    },
    // async createPhoto(_, data) {
    //   const {
    //     aws_user_files_s3_bucket_region: region,
    //     aws_user_files_s3_bucket: bucket
    //   } = awsconfig;
    //   const { file, type: mimeType, id } = data;
    //   const extension = file.name.substr(file.name.lastIndexOf(".") + 1);
    //   const photoId = uuid();
    //   const key = `images/${photoId}.${extension}`;
    //   const inputData = {
    //     id: photoId,
    //     photoProjectId: id,
    //     contentType: mimeType,
    //     fullsize: {
    //       key,
    //       region,
    //       bucket
    //     }
    //   }

    //   //s3 bucket storage add file to it
    //   try {
    //     await Storage.put(key, file, {
    //       level: "protected",
    //       contentType: mimeType,
    //       metadata: { projectId: id, photoId }
    //     })
    //     await API.graphql(
    //       graphqlOperation(createPhotoMutation, { input: inputData })
    //     )
    //     return Promise.resolve("success");


    //   } catch (error) {
    //     console.log("createPhoto error", error)
    //     return Promise.reject(error);

    //   }
    // }

  },
  getters: {
    projects: (state) => state.projects
  }
}