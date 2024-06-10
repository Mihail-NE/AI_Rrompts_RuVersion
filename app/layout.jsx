import "@styles/globals.css";


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share Ai Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="gradient"></div>
        </div>
        <main className="main">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
