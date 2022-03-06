<template>
  <h1>Projects</h1>
  <h3 class="text-3xl">Create New Project</h3>
  <div class="flex flex-col m-auto w-64 bordered">
    <input
      class="input"
      placeholder="Project Name..."
      type="text"
      v-model="projectName"
    />
    <button class="button-blue w-48 mx-auto" @click="createProject()">
      Create Project
    </button>
  </div>

  <section>
    <h2 class="mt-4 text-2xl">List of Projects</h2>

    <div class="flex flex-wrap w-full m-auto justify-center">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="
          cursor-pointer
          mt-4
          ml-4
          w-3/12
          h-24
          bordered
          flex
          items-center
          justify-center
        "
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
        name: this.projectName,
        owner: this.user.username,
        ownerId: this.user.id,
      };
      console.log("HERE");
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