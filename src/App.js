import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Frontend mini check</h1>

      {data ? (
        <>
          <p><b>Service:</b> {data.service}</p>
          <p><b>Message:</b> {data.message}</p>
        </>
      ) : (
        <p>Loading from backend...</p>
      )}
    </div>
  );
}

export default App;
