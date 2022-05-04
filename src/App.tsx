import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useRef } from 'react';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  return (
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet ref={routerRef}>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home router={routerRef.current}/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;
