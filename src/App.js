import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Playground from './components/Playground';
import Sidebar from './components/Sidebar';

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
