import "../styles/globals.css";
import type { AppProps } from "next/app";
import Amplify from "aws-amplify";

function MyApp({ Component, pageProps }: AppProps) {
  Amplify.configure({
    aws_cognito_region: "Oregon",
    aws_user_pools_id: "us-west-2_SMaF6KQyF",
    aws_user_pools_web_client_id: "2ns2o5e0ahg8e5um8iapm5e29g",
  });
  return <Component {...pageProps} />;
}
export default MyApp;
