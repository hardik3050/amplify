import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react';

const App = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);



export default withAuthenticator(App, {includeGreetings:true});
