import React from "react";
import { ProfileHeader } from "@undataforum/components";

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { firstName, lastName, committee }
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
    <div>
      <ProfileHeader name={name} img={img} badges={badges} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Template;

// eslint-disable-next-line no-undef
export const query = graphql`
  query Profile($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
