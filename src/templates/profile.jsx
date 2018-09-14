import React from "react";
import rehypeReact from "rehype-react";
import { Link, graphql } from "gatsby";
import { A, ContentPage, P, ProfileHeader } from "@undataforum/components";
import Layout from "../components/Layout";

// External links open in new browser tab.
const externalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

const Anchor = ({ href, children }) => (
  <A anchor={externalLink} href={href}>
    {children}
  </A>
);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Anchor,
    p: P
  }
}).Compiler;

const Profile = ({
  data: {
    site: {
      siteMetadata: { title, description }
    },
    markdownRemark: {
      frontmatter: { firstName, lastName, committee },
      htmlAst
    },
    imageSharp: {
      resize: { src: img }
    }
  }
}) => {
  const name = `${firstName} ${lastName}`;
  const badges = [];
  if (committee) {
    badges.push({
      text: "Committee Member",
      href: "/committee/",
      color: "red"
    });
  }
  return (
    <Layout>
      <ContentPage siteTitle={title} pageTitle={name} description={description}>
        <ProfileHeader
          anchor={({ href, children }) => <Link to={href}>{children}</Link>}
          name={name}
          img={img}
          badges={badges}
          mb={3}
        />
        {renderAst(htmlAst)}
      </ContentPage>
    </Layout>
  );
};

export default Profile;

export const profileQuery = graphql`
  query Profile($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        firstName
        lastName
        committee
      }
    }
    imageSharp(fields: { slug: { eq: $slug } }) {
      resize(width: 500, height: 500) {
        src
      }
    }
  }
`;
