import { useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Playground from './components/playground/Playground';

function App() {
  const [splitView, setSplitView] = useState('H');
  const [sideCollapsed, setSideCollapsed] = useState(true);

  return (
    <div className="App">
      <Header />
      <section>
        <aside className={sideCollapsed ? 'collapsed' : ''}>
          <Sidebar collapsed={sideCollapsed} />
        </aside>
        <Playground split={splitView} />
      </section>
      <Footer
        drawerClosed={sideCollapsed}
        onSplitViewChange={setSplitView}
        onSidebarChange={setSideCollapsed}
      />
    </div>
  );
}

export default App;
