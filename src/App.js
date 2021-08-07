import { useContext, useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Playground from './components/playground/Playground';
import Store, { Context } from './Store';

const AppInterface = () => {
  const { state } = useContext(Context);
  const [refresh, refreshHistory] = useState(null);

  return (
    <div className="App">
      <Header />
      <section>
        {state && (
          <>
            <aside className={state.sideDrawerOpened ? '' : 'collapsed'}>
              <Sidebar refresh={refresh} />
            </aside>
            <Playground triggerSubmit={refreshHistory} />
          </>
        )}
      </section>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Store>
      <AppInterface />
    </Store>
  );
}

export default App;
