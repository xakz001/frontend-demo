import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/version")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Frontend ⇄ Backend Version</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data ? (
        <>
          <p><b>Service:</b> {data.service}</p>
          <p><b>Version:</b> {data.version}</p>
          <p><b>Build time:</b> {data.buildTime}</p>
        </>
      ) : (
        !error && <p>Loading version from backend...</p>
      )}
    </div>
  );
}

export default App;