import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("/api/ping")
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Frontend ⇄ Backend E2E test</h1>

      {err && <p style={{ color: "red" }}>{err}</p>}

      {data ? (
        <>
          <p><b>From:</b> {data.from}</p>
          <p><b>Message:</b> {data.message}</p>
          <p><b>Timestamp:</b> {data.ts}</p>
        </>
      ) : (
        !err && <p>Loading from backend...</p>
      )}
    </div>
  );
}

export default App;
