import Vue from 'vue';

const init = async (dashboard) => {
    try {
        const template = await import(`./dashboards/${dashboard}`);
        const Dashboard = template.default;
        new Vue({
            el: '#vue-root',
            template: '<Dashboard/>',
            components: {
                Dashboard
            }
        })
    } catch (e) {
        console.error(`[Smashing] Could not resolve dashboard with name '${dashboard}'.`);
    }
};

global.smashing = {
    init
};
