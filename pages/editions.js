import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
import EDITIONS from '../queries/editions.gql'
import Loading from '../components/Loading'
import Banner from '../components/Banner'

class Editions extends Component {
    render () {
      return (
        <App>
          <Query query={EDITIONS}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />
              if (error) return <h2>error</h2>
              if (data) {
                return <Banner editions={data.editions} />
              }
            }}
          </Query>
        </App>
      )
    }
}

export default Editions