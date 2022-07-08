import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
interface InputProps {
  title?: string;
  description?: string;
}
export default function SEO({ title, description }: InputProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "Smrm | Front-end Developer",
  description: "Front-end Developer",
};
