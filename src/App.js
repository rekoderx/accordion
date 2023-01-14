import Question from "./Question";
import data from "./data";

function App() {
  return (
    <main>
      <h1>Questions And Answers About Login</h1>
      <section>
        {data.map((element) => {
          return <Question key={element.id} element={element} />;
        })}
      </section>
    </main>
  );
}

export default App;
