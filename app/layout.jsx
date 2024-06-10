import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

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
        <main className="main">
            <Nav />
            {children}
            </main>
      </body>
    </html>
  );
};

export default Rootlayout;
