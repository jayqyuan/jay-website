import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "2245b53v",
    dataset: 'production',
    title: 'jay-website',
    apiVersion: '2023-10-03',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config