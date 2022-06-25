import "./App.css";
import { SlideViewer } from "./SlideViewer";

export const slides = [
  {
    title: "Futurityvoluptate est",
    description: "Minim aliqua anim in enim reprehenderit irure dolor laboris.",
  },
  {
    title: "ApextriLorem laboris",
    description:
      "Adipisicing ea pariatur nulla nulla Lorem eu non adipisicing excepteur nostrud.",
  },
  {
    title: "Centuriaduis commodo",
    description: "Ut sunt cillum in minim minim nostrud deserunt.",
  },
  {
    title: "Zedalisexcepteur fugiat",
    description: "Eiusmod ea culpa veniam laborum ipsum enim incididunt elit.",
  },
  {
    title: "Comvexcupidatat ad",
    description:
      "Quis dolor nostrud aute dolore est pariatur id pariatur tempor ipsum.",
  },
  {
    title: "Andershuncillum ea",
    description: "Sunt ut Lorem ipsum excepteur enim ex minim anim tempor.",
  },
];

function App() {
  return (
    <div className="App">
      <SlideViewer slides={slides} />
    </div>
  );
}

export default App;
