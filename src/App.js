import { useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Playground from './components/playground/Playground';

function App() {
  const [splitView, setSplitView] = useState('H');

  return (
    <div className="App">
      <Header />
      <section>
        <aside>
          <Sidebar />
        </aside>
        <Playground split={splitView} />
      </section>
      <Footer onSplitViewChange={setSplitView} />
    </div>
  );
}

export default App;
