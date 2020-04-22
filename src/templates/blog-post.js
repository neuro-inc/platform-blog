import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// import Bio from "../components/bio"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostWrap>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(0.5),
              marginTop: rhythm(-1)
            }}
          >
            {post.frontmatter.date}
          </p>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
        </PostWrap>
        
        {/*<Bio /> */}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            marginLeft: 0
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

const PostWrap = styled.div`
  border-radius: 20px; 
  background: #ededed;
  box-shadow: -7px -7px 10px #fff,5px 5px 8px rgba(0,0,0,.2);
  padding: 30px;
  margin-bottom: 40px;
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
