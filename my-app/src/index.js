
import React from "react";
import ReactDOM from "react-dom/client";



const ImageSlider = () => {
const images = [
  "https://picsum.photos/id/60/400/250",
  "https://picsum.photos/id/70/400/250",
  "https://picsum.photos/id/80/400/250"
];
  const [index, setIndex] = React.useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const previousImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="slider"
        style={{
          width: "400px",
          height: "250px",
          objectFit: "cover"
        }}
      />

      <br />
      <br />

      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

const ImageRotation = () => {
  const [degree, setDegree] = React.useState(0);

  const rotateImage = () => {
    setDegree(degree + 90);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>Image Rotation</h1>

      <img
src="https://picsum.photos/id/90/300/300"
        alt="rotation"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          transform: `rotate(${degree}deg)`
        }}
      />

      <br />
      <br />

      <button onClick={rotateImage}>
        Rotate Image
      </button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>Counter App</h1>

    

      <h2>{count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>

      <h1 style={{ textAlign: "center" }}>
      </h1>
<Counter />

<ImageRotation />

<ImageSlider />

    </div>
  );
};



const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);