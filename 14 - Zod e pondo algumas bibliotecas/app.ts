import {z} from 'zod';
// paea abaixar qualquer biblioteca de javascript no typescript, é necessario usar @type/ antes
import fs from 'node:fs'
import { time } from 'node:console';
import { values } from 'lodash';

const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()]))
})

type Data = z.infer<typeof dataSchema>;

const content = JSON.parse(fs.readFileSync('data.json').toString());

dataSchema.parse(content);

const parseData = dataSchema.parse(content);