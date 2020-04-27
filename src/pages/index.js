import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

class Index extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title='All posts' />
          <div style={{ margin: '20px 0 40px' }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <PostItem key={node.fields.slug}>
                  <PostTitle>
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </PostTitle>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  />
                </PostItem>
              )
            })}
          </div>
        </Layout>
      </>
    )
  }
}

const PostItem = styled.div`
  border-radius: 20px; 
  background: #ededed;
  box-shadow: -7px -7px 10px #fff,5px 5px 8px rgba(0,0,0,.2);
  padding: 30px;
  margin-bottom: 40px;
`

const PostTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 36px;
  line-height: 1.3;
  a {
    color: #3d3d3d;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 480px){
    font-size: 28px;
  }
`

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
