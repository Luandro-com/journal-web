import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import ISSUES from '../queries/issues.gql'
import Loading from '../components/Loading'
import Banner from '../components/Banner'

class Issues extends Component {
    render () {
      return (
        <App>
          <Query query={ISSUES}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />
              if (error) return <h2>error</h2>
              if (data) {
                return <Banner issues={data.issues} />
              }
            }}
          </Query>
        </App>
      )
    }
}

export default Issues