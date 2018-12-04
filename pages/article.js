import React, { Component } from 'react'
import Router from 'next/router'
import { Query } from 'react-apollo'
import App from '../components/App'
import ARTICLE from '../queries/article.gql'
import Loading from '../components/Loading'

class Article extends Component {
    render () {
      if (Router.router && Router.router.query) {
        const articleId = Router.router.query.id
        return (
          <App>
            <Query query={ARTICLE} variables={{ articleId }}>
              {({ data, loading, error }) => {
                if (loading) return <Loading />
                if (error) return <h2>error</h2>
                if (data) {
                  const { title, author, shortDescription, resume } = data.article
                  return (
                    <div>
                      <h1>{title}</h1>
                      <span>{author.firstName}</span>
                      <p>{shortDescription}</p>
                      <h3>Resumo</h3>
                      <p>{resume}</p>
                    </div>
                  )
                }
              }}
            </Query>
          </App>
        )
      } else {
        return <h1>Redirecionando...</h1>
      }
    }
}

export default Article