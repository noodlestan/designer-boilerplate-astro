import {
    createBuilderContext,
    formatDecisionStatus,
    formatError,
    loadConfig,
    buildStaticStore,
    produceDecisions,
} from '@noodlestan/designer-functions';

const loadDecisions = async () => {
    const config = await loadConfig();
    const context = createBuilderContext(config.store);
    const build = buildStaticStore(context);
    const store = await build();

    const produced = produceDecisions(context, store);
    produced.decisions().forEach(status => console.info(formatDecisionStatus(status)));
    console.info('🐘', produced.summary());

    context.errors().forEach(error => console.error(formatError(error)));
    if (produced.hasErrors()) {
        throw new Error(`Errors encountered producing decisions.`);
    }
};

loadDecisions().catch(err => {
    console.error(err);
    process.exit(1);
});
