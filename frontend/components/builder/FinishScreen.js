export default function FinishScreen({ onEdit, onExport }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        minHeight: "400px",
        background: "white",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#1A1A2E",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Your CV is Complete!
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "#718096",
          textAlign: "center",
          marginBottom: 24,
          maxWidth: 400,
          lineHeight: 1.5,
        }}
      >
        Great job! Your resume is ready. You can now export it as PDF or go back
        to make any final edits.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={onEdit}
          style={{
            padding: "12px 24px",
            background: "none",
            border: "1px solid #E2E8F0",
            borderRadius: 8,
            fontSize: 14,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            color: "#718096",
          }}
        >
          ✏ Edit More
        </button>
        <button
          onClick={onExport}
          style={{
            padding: "12px 24px",
            background: "#E53E3E",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          📄 Export PDF
        </button>
      </div>
    </div>
  );
}
