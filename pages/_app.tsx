import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
//const isDebugging = require("debug-mode");
//import { DebugAgentConfig } from '@google-cloud/debug-agent/build/src/agent/config';
//const debug = require('@google-cloud/debug-agent').start({ allowExpressions: true });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  //debug.isReady();
  return <Component {...pageProps} />
}

export default MyApp
