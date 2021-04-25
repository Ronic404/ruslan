import { Switch, Route } from 'react-router-dom';

import Title from './components/Title';

import StartPage from './pages/StartPage';
import RuslanPage from './pages/RuslanPage';
import RomaPage from './pages/RomaPage';
import Rules from './pages/Rules';
import Quiz from './pages//Quiz';

export default function App() {
  return (
    <>
      <Title />
      <Switch>
        <Route path="/" exact>
          <StartPage />
        </Route>
        <Route path="/ruslan">
          <RuslanPage />
        </Route>
        <Route path="/roma">
          <RomaPage />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </>
  );
}
