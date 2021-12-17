import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import infoLogo from "./assets/info.png";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchTerm}&limit=10`
    )
      .then((res) => res.json())
      .then((gifs) => {
        console.log(gifs);

        setGifs(gifs.data);
      });
  }, [searchTerm]);

  return (
    <div className="static flex flex-col items-center pb-20">
      <h1 className="mt-10 mb-10 text-3xl md:text-5xl">Giphy Search Engine</h1>
      <button className="absolute left-0" onClick={() => Toggle()}>
        <img
          src={infoLogo}
          alt=""
          className="w-6 mt-2 ml-2 md:mt-5 md:ml-5 md:w-10"
        ></img>
      </button>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Search Term"
        className="p-2 mb-10 border-2 border-blue-500 rounded-md"
      />

      <div className="flex flex-row flex-wrap justify-center max-w-7xl">
        {gifs.map((gif) => {
          return (
            <div className="flex flex-row rounded-md">
              <img
                // title={gif.title}
                // key={gif.id}
                alt={gif.id}
                src={gif.images.fixed_height.url}
                className="p-4 transition duration-500 transform hover:scale-110"
              ></img>
            </div>
          );
        })}
      </div>

      <Modal
        show={modal}
        close={Toggle}
        className="flex items-center justify-center"
      />

      <footer className="fixed bottom-0 flex items-center justify-around w-full h-10 bg-slate-300 text-slate-500">
        <p>Copyright © Lourensoil4.com</p>
        <p>All Rights Resereved</p>
      </footer>
    </div>
  );
}

export default App;
