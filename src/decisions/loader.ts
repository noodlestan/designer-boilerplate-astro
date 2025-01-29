import path from "node:path";

import { createDecisionLoader } from "@noodlestan/designer-functions";
import { DECISION_SCHEMAS } from "@noodlestan/designer-schemas";
import { DEMO_DATA } from "@noodlestan/designer-decisions";

const DATA_PATH = path.resolve("./data");

export const loader = createDecisionLoader(
    [DECISION_SCHEMAS],
    [DEMO_DATA, DATA_PATH],
    async (moduleName: string) => `./node_modules/${moduleName}`
);
