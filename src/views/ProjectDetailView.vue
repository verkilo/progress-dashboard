<template>
  <article class="relative">
    <div vif="user" class="absolute flex left-2 top-2 gap-x-2">
      <div
        class="flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green"
        @click="editMode"
      >
        <PencilIcon class="w-6 h-6" aria-hidden="true" />
      </div>
      <div
        click="deleteWorkout"
        class="flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green"
      >
        <TrashIcon class="w-6 h-6" aria-hidden="true" />
      </div>
    </div>
    <div v-if="editing">
      <h1><input type="text" class="w-1/2 input" v-model="project.name" /></h1>
      <div>
        <input type="text" class="w-1/2 input" v-model="project.description" />
      </div>
      <button class="button-blue" @click="updateProject()">Update</button>
    </div>
    <div v-else>
      <h1>{{ project.name }}</h1>
      <div class="prose">
        {{ project.description }}
      </div>
    </div>
  </article>
</template>

<script>
import { TrashIcon, PencilIcon } from "@heroicons/vue/outline";
export default {
  mounted() {
    this.getProject();
  },
  components: {
    TrashIcon,
    PencilIcon,
  },
  data: () => ({
    project: {},
    sessions: [],
    error: "",
    editing: false,
  }),
  methods: {
    async getProject() {
      const project = await this.$store.dispatch(
        "projectInfo/getProject",
        this.id
      );
      this.project = project.data.getProject;
      this.sessions = project.data.getProject.sessions;
    },
    async editMode() {
      this.editing = !this.editing;
    },
    async updateProject() {
      const project = this.project;
      delete project.sessions;
      await this.$store.dispatch("projectInfo/updateProject", {
        ...this.project,
      });
      this.editing = false;
    },
  },
  computed: {
    edit() {
      return this.editing;
    },
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>