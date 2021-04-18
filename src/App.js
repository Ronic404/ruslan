import { Switch, Route } from 'react-router-dom';

import Title from './components/Title';
import StartPage from './pages/StartPage';
import RuslanPage from './pages/RuslanPage';
import RomaPage from './pages/RomaPage';

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
      </Switch>
    </>
  );
}
