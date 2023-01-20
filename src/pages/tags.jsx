import React from "react";
import PropTypes from "prop-types";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
// export const Head = () => <title>{title}</title>;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    // site: {
    //   siteMetadata: { title },
    // },
  },
}) => (
  <Layout >
      <main className="md:max-w-[75%] mx-auto text-justify">
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
  </main>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
