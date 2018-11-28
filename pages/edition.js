import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import EDITION from '../queries/edition.gql'
import Loading from '../components/Loading'

class Edition extends Component {
    render () {
      const { router: { query: { key } } } = this.props
      return (
        <App>
          <Query query={EDITION} variables={{editionKey: key}}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />
              if (error) return <h2>error</h2>
              if (data && data.edition) {
                const { body, id, title } = data.edition
                return (
                  <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: body }} />
                  </div>
                )
              }
            }}
          </Query>
        </App>
      )
    }
}

export default withRouter(Edition)