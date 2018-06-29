import React from "react";
import { ProfileList } from "@undataforum/components";

const Committee = ({
  data: { allMarkdownRemark: profiles, allImageSharp: images }
}) => (
  <ProfileList
    profiles={profiles.edges.map(({ node }, index) => ({
      name: `${node.frontmatter.firstName} ${node.frontmatter.lastName}`,
      jobtitle: node.frontmatter.jobtitle,
      organization: node.frontmatter.organization,
      slug: node.fields.slug,
      href: node.fields.path,
      img: images.edges[index].node.resize.src
    }))}
  />
);

export default Committee;

// eslint-disable-next-line no-undef
export const query = graphql`
  query Committee {
    allMarkdownRemark(
      filter: { frontmatter: { committee: { eq: true } } }
      sort: {
        fields: [frontmatter___lastName, frontmatter___firstName]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            firstName
            lastName
            jobtitle
            organization
          }
          fields {
            slug
            path
          }
        }
      }
    }
    allImageSharp(
      filter: { fields: { type: { eq: "profile" } } }
      sort: { fields: [fields___lastName, fields___firstName], order: ASC }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 500, height: 500) {
              src
            }
          }
        }
      }
    }
  }
`;
