import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// 新しいページのコンポーネントをインポート
import Page2 from './Page2';

Amplify.configure({
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_CLIENT_ID,
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
          {({ history }): { history: any })  => (
            <Authenticator hideSignUp={true} loginMechanisms={['email']}>
              {({ signOut, user }) => (
                <main>
                  <h1>Hello</h1>
                  <button onClick={signOut}>Sign out</button>
                  <button onClick={() => { history.push('/page2') }}>Go to Page 2</button>
                </main>
              )}
            </Authenticator>
          )}
        </Route>
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
