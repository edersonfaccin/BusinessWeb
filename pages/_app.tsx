import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthProvider } from '../src/data/context/AuthContext'
import { api } from '../src/utils/environment';

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: api,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}
