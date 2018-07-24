import React from "react";
import { Link } from "gatsby";
import Head from "../Head";
import { StaticQuery, graphql } from "gatsby";
import { AlternateTitle, Header, Provider } from "@undataforum/components";

const internalLink = ({ href, children }) => <Link to={href}>{children}</Link>;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, siteUrl }
      }
    }) => (
      <Provider>
        <Head title={title} description={description} url={siteUrl} />
        <Header
          anchor={internalLink}
          links={[
            {
              href: "/tracks",
              text: "Tracks"
            },
            {
              href: "/schedule",
              text: "Schedule"
            },
            {
              href: "/committee",
              text: "Committee"
            }
          ]}
          title={color => <AlternateTitle color={color} year={2018} />}
        />
        {children}
      </Provider>
    )}
  />
);

export default Layout;
