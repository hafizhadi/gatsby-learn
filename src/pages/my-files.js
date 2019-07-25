
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>absolutePath</th>
                            <th>extension</th>
                            <th>size</th>
                            <th>modifiedTime</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.absolutePath}</td>
                                <td>{node.extension}</td>
                                <td>{node.size}</td>
                                <td>{node.modifiedTime}</td>
                                <td>{node.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        allFile {
            edges {
            node {
                absolutePath
                extension
                size
                modifiedTime
                name
                }
            }
        }
    }   
`