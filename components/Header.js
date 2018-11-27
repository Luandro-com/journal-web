import Link from 'next/link'
import { withRouter } from 'next/router'
import { logout } from '../lib/auth'
import { ApolloConsumer } from 'react-apollo'

const Header = ({ router: { pathname }, user }) => (
  <ApolloConsumer>
    { client => (
      <header>
        <Link prefetch href='/'>
          <a className={pathname === '/' ? 'is-active' : ''}>Capa</a>
        </Link>
        <Link prefetch href='/about'>
          <a className={pathname === '/about' ? 'is-active' : ''}>Sobre</a>
        </Link>
        <Link prefetch href='/authors'>
          <a className={pathname === '/authors' ? 'is-active' : ''}>Autores</a>
        </Link>
        <Link prefetch href='/editions'>
          <a className={pathname === '/editions' ? 'is-active' : ''}>Edições</a>
        </Link>
        {!user &&
          <Link prefetch href='/login'>
            <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
          </Link>
        }
        {user && <a onClick={() => logout(client)} href=''>Logout</a>}
        
        <style jsx>{`
          header {
            margin-bottom: 25px;
          }
          a {
            font-size: 14px;
            margin-right: 15px;
            text-decoration: none;
          }
          .is-active {
            text-decoration: underline;
          }
        `}</style>
      </header>
    )}
  </ApolloConsumer>
)

export default withRouter(Header)
