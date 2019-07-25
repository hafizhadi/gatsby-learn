import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ children }) => {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteTitle
                    }
                }
            }
        `
    )
 
    return (
        <div
            css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        `}
        >
            <Link to={`/`}>
                <h3
                    css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            `}
                >
                    { data.site.siteMetadata.siteTitle }
        </h3>
            </Link>
            <Link
                to={`/about/`}
                css={css`
            float: right;
        `}
            >
                About
        </Link>
            {children}
        </div>
    )
}