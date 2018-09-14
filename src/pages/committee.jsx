import React from "react";
import { Link, graphql } from "gatsby";
import { Container, List, ProfilePreview } from "@undataforum/components";
import Layout from "../components/Layout";

const Page = ({
  data: {
    allMarkdownRemark: { edges: profiles },
    allImageSharp: { edges: images }
  }
}) => (
  <Layout>
    <Container maxWidth={7} mt={3} px={0}>
      <List
        anchor={({ href, children }) => <Link to={href}>{children}</Link>}
        item={props => <ProfilePreview {...props} pb={3} mb={3} px={[2, 3]} />}
        values={profiles.map(
          (
            {
              node: {
                frontmatter: { firstName, lastName, jobtitle, organization },
                fields: { path }
              }
            },
            index
          ) => ({
            name: `${firstName} ${lastName}`,
            jobtitle,
            organization,
            href: path,
            img: images[index].node.resize.src
          })
        )}
      />
    </Container>
  </Layout>
);

export default Page;

export const pageQuery = graphql`
  query {
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
