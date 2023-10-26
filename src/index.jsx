import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react'
import { SettingContext } from './setting-context';

import Emoticon from './components/Emoticon';
import Configurator from './components/Configurator';

const App = () => {
  const [settings, setSettings] = useState({
    eyes: 1,
    mouth: 2,
    color: 3
  })

  return (
    <SettingContext.Provider value={{...settings}}>
      <div className="container">
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </div>
    </SettingContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
