import { z } from 'zod';
// paea abaixar qualquer biblioteca de javascript no typescript, é necessario usar @type/ antes
import fs from 'node:fs';
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()]))
});
const content = JSON.parse(fs.readFileSync('data.json').toString());
dataSchema.parse(content);
const parseData = dataSchema.parse(content);
//# sourceMappingURL=app.js.map