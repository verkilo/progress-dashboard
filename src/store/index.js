import { createStore } from 'vuex';
import { auth } from './auth/auth';
import { projectInfo } from './projects/projects';

export default createStore({
  modules: {
    auth,
    projectInfo
  },
});
