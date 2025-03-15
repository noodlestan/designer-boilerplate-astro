import { defineConfig } from '@noodlestan/designer-functions';

const LOCAL_DATA = './data';

export default defineConfig({
    store: {
        decisions: [LOCAL_DATA],
    },
});
