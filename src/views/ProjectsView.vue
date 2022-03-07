<template>
  <h1>Projects</h1>
  <h3 class="text-3xl">Create New Project</h3>
  <div class="flex flex-col w-64 m-auto bordered">
    <input
      class="input"
      placeholder="Project Name..."
      type="text"
      v-model="projectName"
    />
    <button class="w-48 mx-auto button-blue" @click="createProject()">
      Create Project
    </button>
  </div>

  <section>
    <h2 class="mt-4 text-2xl">List of Projects</h2>

    <div class="flex flex-wrap justify-center w-full m-auto">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="flex items-center justify-center w-3/12 h-24 mt-4 ml-4 cursor-pointer  bordered"
        @click="openProjectDetail(project)"
      >
        <div>
          <h3 class="text-xl">{{ project.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { v4 as uuid } from "uuid";
export default {
  async mounted() {
    this.$store.dispatch("projectInfo/getProjectsData");
  },
  data: () => ({ projectName: "", error: "" }),
  methods: {
    openProjectDetail(project) {
      this.$router.push(`/project/${project.id}`);
    },
    async createProject() {
      this.error = "";
      if (!this.projectName) {
        this.error = "Please enter an project name";
        return;
      }
      const newProject = {
        id: uuid().substring(0, 8),
        name: this.projectName,
        owner: this.user.username,
        ownerId: this.user.id,
      };
      this.$store.dispatch("projectInfo/createProject", newProject);
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      projects: "projectInfo/projects",
    }),
  },
  // name: "ProjectsView",
};
</script>

<style>
</style>