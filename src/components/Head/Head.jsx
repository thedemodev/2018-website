import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ title, description, url }) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Head;
