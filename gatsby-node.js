const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  // Add path to all MarkdownRemark that have not been processed yet.
  if (node.internal.type === "MarkdownRemark" && !node.fields.path) {
    const { createNodeField } = boundActionCreators;
    createNodeField({
      node,
      name: "path",
      value: createFilePath({ node, getNode })
    });
  }
};
