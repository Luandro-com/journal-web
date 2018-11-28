import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import App from '../components/App'
// import EDITION from '../queries/editions.gql'
import Loading from '../components/Loading'

class Edition extends Component {
    render () {
      return (
        <App>
          {/* <Query query={EDITION}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />
              if (error) return <h2>error</h2>
              if (data) {
                return ( */}
                  <div>
                    <h1>Edition</h1>
                  </div>
                {/* )
              }
            }}
          </Query> */}
        </App>
      )
    }
}

export default Edition