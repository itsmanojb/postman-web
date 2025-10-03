import { useContext } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Playground from './components/playground/Playground';
import Store, { Context } from './contexts/Store';
import History from './contexts/History';

const AppInterface = () => {
  const { state } = useContext(Context);

  return (
    <div className="App">
      <Header />
      <section>
        {state && (
          <>
            <aside className={state.sideDrawerOpened ? '' : 'collapsed'}>
              <Sidebar />
            </aside>
            <Playground />
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
      <History>
        <AppInterface />
      </History>
    </Store>
  );
}

export default App;
