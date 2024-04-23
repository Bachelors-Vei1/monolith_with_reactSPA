import React, {lazy, useState, useEffect, Suspense} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"; // Import Switch instead of Routes
import Navigation from './components/Navigation';

const HomeLazy = lazy(() => import('./components/Home'));
const SignUpLazy = lazy(() => import('./components/auth/SignUp'));
const SignInLazy = lazy(() => import('./components/auth/SignIn'));
const AboutLazy = lazy(() => import('./components/About'))

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch> {/* Use Switch instead of Routes */}
          <Route exact path="/" component={HomeLazy}/> {/* Use component prop */}
          <Route path="/auth/signin" component={SignInLazy}/>
          <Route path="/auth/signup" component={SignUpLazy}/>
          <Route path="/about" component={AboutLazy}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
