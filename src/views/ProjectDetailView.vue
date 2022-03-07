<template>
  <article class="relative max-w-2xl mx-auto dark:text-stone-200">
    <div vif="user" class="absolute flex right-2 top-2 gap-x-2">
      <div
        class="flex items-center justify-center rounded-full shadow-lg cursor-pointer  h-7 w-7 bg-at-light-green"
        @click="editMode"
      >
        <PencilIcon class="w-6 h-6" aria-hidden="true" />
      </div>
      <div
        click="deleteWorkout"
        class="flex items-center justify-center rounded-full shadow-lg cursor-pointer  h-7 w-7 bg-at-light-green"
      >
        <TrashIcon class="w-6 h-6" aria-hidden="true" />
      </div>
    </div>
    <div v-if="editing">
      <h1>Edit: {{ project.name }}</h1>
      <div class="flex">
        <label class="w-1/3 px-2 text-right" for="">WIP Title</label>
        <input type="text" class="w-1/2 input" v-model="revised.name" />
      </div>
      <div class="flex">
        <label class="w-1/3 px-2 text-right" for="">Tagline</label>
        <input type="text" class="w-1/2 input" v-model="revised.description" />
      </div>
      <div class="flex">
        <label class="w-1/3 px-2 text-right" for="">Target Wordcount</label>
        <input
          type="text"
          class="w-1/2 input"
          v-model="revised.targetWordcount"
        />
      </div>
      <div class="flex">
        <label class="w-1/3 px-2 text-right" for="">Starting Wordcount</label>
        <input
          type="text"
          class="w-1/2 input"
          v-model="revised.startingWordcount"
        />
      </div>
      <button class="button-blue" @click="updateProject()">Update</button>
      or
      <a
        @click="cancelRevision()"
        class="text-blue-500 underline dark:text-blue-300"
        >Cancel</a
      >
    </div>
    <div v-else>
      <h1>{{ project.name }}</h1>
      <div class="mb-12 text-xl text-center">
        {{ project.description }}
      </div>
      <section>
        <h2 class="text-2xl">Macros</h2>
        <table class="w-full max-w-lg mx-auto text-left">
          <tr>
            <th>Starting Wordcount</th>
            <td scope="row" id="startingWordcount" class="text-right">
              {{ project.startingWordcount || 0 }}
            </td>
          </tr>
          <tr>
            <th scope="row">Target Wordcount</th>
            <td id="targetWordcount" class="text-right">
              {{ project.targetWordcount || 0 }}
            </td>
          </tr>
          <tr>
            <th scope="row">Current Wordcount</th>
            <td id="currentWordcount" class="text-right">0</td>
          </tr>
          <tr>
            <th scope="row">Started Date</th>
            <td>{{ project.startedOn }}</td>
          </tr>
          <tr>
            <th scope="row">Anticipated Date</th>
            <td>{{ project.expectedOn }}</td>
          </tr>
          <tr>
            <th scope="row">Actual Finish Date</th>
            <td>{{ project.finishedOn }}</td>
          </tr>
          <tr>
            <th scope="row">Created</th>
            <td>{{ project.createdAt }}</td>
          </tr>
          <tr>
            <th scope="row">Updated</th>
            <td>{{ project.updatedAt }}</td>
          </tr>
          <tr></tr>
        </table>
      </section>
      <section>
        <h2 class="text-2xl">Sessions</h2>
        <div class="text-left">sessions</div>
      </section>
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
    revised: {},
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
      this.revised = { ...this.project };
    },
    async editMode() {
      this.editing = !this.editing;
    },
    async updateProject() {
      const project = this.revised;
      project.updatedAt = new Date().toISOString();

      delete project.sessions; // We get an error for updating the children.
      await this.$store.dispatch("projectInfo/updateProject", {
        ...project,
      });
      this.project = this.revised;
      this.editing = false;
    },
    async cancelRevision() {
      this.editing = false;
      this.revised = this.project;
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