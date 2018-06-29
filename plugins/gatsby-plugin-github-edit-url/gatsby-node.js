const pkg = require("../../package.json");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    // Create GitHub edit link:
    // https://github.com/unstats/undataforum.org/blob/master/content/profile/johannes-huetting.md.
    const { relativePath } = getNode(node.parent);
    const githubEditUrl = `https://github.com/${
      pkg.repository
    }/blob/master/content/${relativePath}`;
    const { createNodeField } = boundActionCreators;
    createNodeField({
      node,
      name: "githubEditUrl",
      value: githubEditUrl
    });
  }
};
