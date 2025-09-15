import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

const appStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundImage: "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
  fontFamily: "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  scrollBehavior: "smooth"
};

const isometricBase = {
  width: "300px",
  height: "300px",
  padding: "20px",
  backgroundImage: "url('assets/img.avif')",
  backgroundSize: "cover",
  border: "1px solid black",
  boxSizing: "border-box",
  transform: "rotate(-30deg) skew(30deg, 0deg)",
  transition: "background-size 0.5s ease, background-position 0.5s ease"
};

const h1Base = {
  position: "relative",
  color: "#fff",
  bottom: "1rem",
  transform: "skew(-50deg)",
  textShadow: "-1px -1px 0 #ccc, -2px -2px 0 #ccc, -3px -3px 0 #ccc",
  fontSize: "38px",
  textAlign: "justify",
  transformOrigin: "bottom"
};

const App = () => {
  return (
    <div style={appStyles}>
      <div
        style={isometricBase}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundSize = "150%";
          e.currentTarget.style.backgroundPosition = "bottom";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundSize = "cover";
          e.currentTarget.style.backgroundPosition = "center";
        }}
      >
        <h1 style={h1Base}>
          ISOMETRIC
          <span
            style={{
              content: '"ISOMETRIC"',
              position: "absolute",
              color: "#0003",
              transform: "skew(50deg) rotateX(180deg)",
              textShadow: "none",
              top: "-18px",
              left: "-11px"
            }}
          ></span>
        </h1>
      </div>
    </div>
  );
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

export default App;
