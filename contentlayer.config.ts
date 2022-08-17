import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    intro: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => "/" + doc._raw.flattenedPath,
    },
  },
}));

const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `work/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    intro: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => "/" + doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Work],
});
