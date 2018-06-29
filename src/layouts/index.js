import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";
import Header from "../components/header";
import { Provider } from "@undataforum/components";

const Layout = ({ data, children, location }) => (
  <Provider>
    <Head
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      url={data.site.siteMetadata.siteUrl}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

// eslint-disable-next-line no-undef
export const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
