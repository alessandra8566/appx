import { createStore } from 'vuex';
import common from './common'

const stores = createStore({
    modules: {
        common,
    },
});

export default stores;