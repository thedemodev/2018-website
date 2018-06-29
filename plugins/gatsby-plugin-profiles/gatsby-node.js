const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// Add metadata to profile nodes.
exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent);
    if (relativePath.includes("profiles")) {
      const { createNodeField } = boundActionCreators;

      // Add type "profile" to fields.
      createNodeField({
        node,
        name: "type",
        value: "profile"
      });

      // Derive slug from path: /profiles/homer-simpson.md => homer-simpson.
      const slug = createFilePath({
        node,
        getNode,
        basePath: `profiles`
      }).slice(1, -1);

      // Add slug to fields.
      createNodeField({
        node,
        name: "slug",
        value: slug
      });

      // Path: /profiles/homer-simpson.
      const path = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: "path",
        value: path
      });
    }
  } else if (node.internal.type === "ImageSharp") {
    const { relativePath } = getNode(node.parent);
    if (relativePath.includes("profiles")) {
      const { createNodeField } = boundActionCreators;

      // Add type "profile" to fields.
      createNodeField({
        node,
        name: "type",
        value: "profile"
      });

      // Derive slug from path: /profiles/homer-simpson.jpg => homer-simpson.
      const slug = createFilePath({
        node,
        getNode,
        basePath: `profiles`
      }).slice(1, -1);

      createNodeField({
        node,
        name: "slug",
        value: slug
      });

      // Extract first name and last name.
      const match = /([a-zA-Z]+)-([a-zA-Z]+)/.exec(slug);
      const firstName = match[1];
      const lastName = match[2];

      createNodeField({
        node,
        name: "firstName",
        value: firstName
      });

      createNodeField({
        node,
        name: "lastName",
        value: lastName
      });
    }
  }
};

// Create profile pages.
exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const profiles = await graphql(`
    query Profiles {
      allMarkdownRemark(filter: { fields: { path: { regex: "/profiles/" } } }) {
        edges {
          node {
            fields {
              path
              slug
            }
          }
        }
      }
    }
  `);
  profiles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve("./src/templates/profile.jsx"),
      context: {
        slug: node.fields.slug
      }
    });
  });
};
