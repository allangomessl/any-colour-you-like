import '../styles/globals.css'
import { MDXProvider } from '../mdx'
import { Root, Col, Link } from 'paintbox'
import RouterLink from 'next/link'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router'
import { Logo } from '../components/Logo';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

Link.initialize(({ to, ...props }) => {
  return <RouterLink href={to}>
    <Link {...props} />
  </RouterLink>
})

function MyApp({ Component, pageProps }) {
  
  return (
    <MDXProvider>
      <Root dir='row' h='100vh'>
        <Col w='300px' gap={4} border='R2' scrollable>
          <Link to='/'>
            <Logo />
          </Link>
          <Col padding='3'>
            <h3>Inputs</h3>
            <Col padding='L3' gap={4}>
              <Link to='/inputs/input-text'>Text</Link>
              <Link to='/inputs/input-date'>Date</Link>
              <Link to='/inputs/input-select'>Select</Link>
              <Link to='/inputs/input-masked'>Masked</Link>
            </Col>
            <h3>Flex</h3>
            <Col padding='L3' gap={4}>
              <Link to='/flex/col'>Col</Link>
              <Link to='/flex/row'>Row</Link>
            </Col>
            <h3>Controls</h3>
            <Col padding='L3' gap={4}>
              <Link to='/controls/button'>Button</Link>
              <Link to='/controls/link'>Link</Link>
              <Link to='/controls/avatar'>Avatar</Link>
            </Col>
            <h3>Collections</h3>
            <Col padding='L3' gap={4}>
              <Link to='/collections/list'>List</Link>
              <Link to='/collections/breadcrumb'>Breadcrumb</Link>
            </Col>
            <h3>Screens</h3>
            <Col padding='L3' gap={4}>
              <Link to='/screen/screen'>Screen</Link>
            </Col>
          </Col>
        </Col>
        <Col fill padding='10vh' scrollable>
          <Component {...pageProps} />
        </Col>
      </Root>
    </MDXProvider>
  )
}

export default MyApp
