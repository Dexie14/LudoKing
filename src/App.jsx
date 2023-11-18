import "./App.css";

import Sidebar from "./components/sidebar";
import TopBar from "./components/topBar"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="flex">
      <section className="md:block hidden">
      <Sidebar />
      </section>
      <section className="w-full">
        <div>
        <TopBar/>
        </div>
        <div>
        <Footer/>
        </div>
      </section>
    </div>
  );
}
