import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="grid grid-rows-[repeat(10,_1fr)] bg-gray-100 w-screen h-full">
      <Nav />
      <Main />
    </main>
  );
}

export default App;
