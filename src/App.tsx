import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Title from './components/Title';

import StartPage from './pages/StartPage';
import RuslanPage from './pages/RuslanPage';
import RomaPage from './pages/RomaPage';
import Rules from './pages/Rules';
import Quiz from './pages/Quiz';
import Desk from './pages/Desk';

const App: FC = () => {
  return (
    <>
      <Title />
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/person/ruslan" component={RuslanPage} />
        <Route path="/person/roma" component={RomaPage} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/quiz/rules" component={Rules} />
        <Route path="/desk" component={Desk} />
      </Switch>
    </>
  );
}

export default App;
