import "./App.css";

import Sidebar from "./components/sidebar";
import TopBar from "./components/topBar"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="flex">
      <section>
      <Sidebar />
      </section>
      <section className="w-full">
        <TopBar/>
        <Footer/>
      </section>
    </div>
  );
}
