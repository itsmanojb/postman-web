import { useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Playground from './components/playground/Playground';

function App() {
  const [splitView, setSplitView] = useState('H');
  const [sideCollapsed, setSideCollapsed] = useState(true);

  const toggleSidebar = () => setSideCollapsed(!sideCollapsed);

  return (
    <div className="App">
      <Header />
      <section>
        <aside className={sideCollapsed ? 'collapsed' : ''}>
          <Sidebar
            collapsed={sideCollapsed}
            onMenuClick={(e) => setSideCollapsed(!e)}
          />
        </aside>
        <Playground split={splitView} />
      </section>
      <Footer
        onSplitViewChange={setSplitView}
        onSidebarChange={toggleSidebar}
      />
    </div>
  );
}

export default App;
