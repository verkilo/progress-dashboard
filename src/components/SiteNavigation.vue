<template>
  <Disclosure
    as="nav"
    class="dark:bg-gray-800 bg-gray-50 p-0"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4" id="site-nav">
              <router-link class="site-link" to="/">Home</router-link>
              <router-link class="site-link" to="/dashboard">
                Dashboard
              </router-link>
              <router-link class="site-link" to="/calendar">
                Calendar
              </router-link>
              <router-link class="site-link" to="/projects">
                Projects
              </router-link>
              <router-link class="site-link" to="/about"> About </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <span class="mx-2 dark:text-white text-gray-400" v-if="user">{{
            user.username
          }}</span>
          <button
            type="button"
            class="
              dark:bg-gray-800
              bg-gray-50
              p-1
              rounded-full
              text-gray-400
              hover:text-black
              dark:hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
            v-if="user"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <div class="p-3 flex-1" v-if="!user"></div>
          <Menu as="div" class="ml-3 relative" v-if="!user">
            <router-link to="/login" class="text-blue-500">Log In</router-link>
            or
            <router-link to="/signup" class="button-blue">Sign Up</router-link>
          </Menu>
          <Menu as="div" class="ml-3 relative" v-if="user">
            <div>
              <MenuButton
                class="
                  bg-gray-800
                  flex
                  text-sm
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-500/25 hidden' : '',
                      'user-menu-item',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-500/25 hidden' : '',
                      'user-menu-item',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-500/25' : '', 'user-menu-item']"
                    @click="logout"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
        <DisclosureButton>
          <router-link class="block px-4 py-2 text-sm text-stone-700" to="/"
            >Home</router-link
          >
        </DisclosureButton>
        <DisclosureButton>
          <router-link
            class="block px-4 py-2 text-sm text-stone-700"
            to="/dashboard"
          >
            Dashboard
          </router-link>
        </DisclosureButton>
        <DisclosureButton>
          <router-link
            class="block px-4 py-2 text-sm text-stone-700"
            to="/calendar"
          >
            Calendar
          </router-link>
        </DisclosureButton>
        <DisclosureButton>
          <router-link
            class="block px-4 py-2 text-sm text-stone-700"
            to="/projects"
          >
            Projects
          </router-link>
        </DisclosureButton>
        <DisclosureButton>
          <router-link
            class="block px-4 py-2 text-sm text-stone-700"
            to="/about"
          >
            About
          </router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  // { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

import { mapGetters } from "vuex";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "SiteNavigation",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
