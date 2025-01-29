import path from "path";

import {
    formatValidationError,
    createDecisionLoader,
    formatDecisionStatus,
    produceDecisions,
} from "@noodlestan/designer-functions";
import { DECISION_SCHEMAS } from "@noodlestan/designer-schemas";
import { DEMO_DATA } from "@noodlestan/designer-decisions";

const DATA_PATH = path.resolve("./data");

const loader = createDecisionLoader(
    [DECISION_SCHEMAS],
    [DEMO_DATA, DATA_PATH],
    async (moduleName) => `./node_modules/${moduleName}`
);

const loadDecisions = async () => {
    const store = await loader();
    if (store.hasErrors()) {
        store
            .storeErrors()
            ?.forEach((error) => console.error(formatStoreError(error)));
    }

    const produced = produceDecisions(store);
    produced
        .decisions()
        .forEach((status) => console.info(formatDecisionStatus(status)));

    console.info("🐘", produced.summary());
    if (produced.hasErrors()) {
        throw new Error(
            `Errors (${produced.errors.count()}) encountered producing decisions.`
        );
    }
};

loadDecisions().catch((err) => {
    console.error(err);
    process.exit(1);
});
