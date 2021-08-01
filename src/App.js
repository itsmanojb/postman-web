import Footer from './components/Footer';
import Header from './components/Header';
import Playground from './components/Playground';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <aside>
          <Sidebar />
        </aside>
        <Playground />
      </section>
      <Footer />
    </div>
  );
}

export default App;
