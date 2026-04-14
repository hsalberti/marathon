import { useState } from "react";

const WEEKS = [
  // Phase 1: Base Building (Weeks 1-4)
  {
    phase: "Base Building",
    week: 1,
    her: [
      { day: "Tue", type: "Easy", desc: "3km easy run", pace: "7:30-8:00/km", km: 3 },
      { day: "Thu", type: "Easy", desc: "3km easy run", pace: "7:30-8:00/km", km: 3 },
      { day: "Sat", type: "Long", desc: "5km long run", pace: "7:30/km", km: 5 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "2km walk/jog intervals", pace: "comfortable", km: 2 },
      { day: "Thu", type: "Easy", desc: "2km walk/jog intervals", pace: "comfortable", km: 2 },
      { day: "Sat", type: "Long", desc: "3km easy jog", pace: "8:00+/km", km: 3 },
    ],
    herTotal: 11, himTotal: 7,
  },
  {
    phase: "Base Building",
    week: 2,
    her: [
      { day: "Tue", type: "Easy", desc: "3.5km easy run", pace: "7:15-7:30/km", km: 3.5 },
      { day: "Thu", type: "Easy", desc: "3.5km easy run", pace: "7:15-7:30/km", km: 3.5 },
      { day: "Sat", type: "Long", desc: "6km long run", pace: "7:15-7:30/km", km: 6 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "2.5km easy jog", pace: "8:00/km", km: 2.5 },
      { day: "Thu", type: "Easy", desc: "2.5km easy jog", pace: "8:00/km", km: 2.5 },
      { day: "Sat", type: "Long", desc: "4km easy jog", pace: "7:45-8:00/km", km: 4 },
    ],
    herTotal: 13, himTotal: 9,
  },
  {
    phase: "Base Building",
    week: 3,
    her: [
      { day: "Tue", type: "Easy", desc: "4km easy run", pace: "7:00-7:15/km", km: 4 },
      { day: "Thu", type: "Tempo", desc: "4km with 2km @ 6:45", pace: "6:45/km middle", km: 4 },
      { day: "Sat", type: "Long", desc: "7km long run", pace: "7:15/km", km: 7 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "3km easy jog", pace: "7:45/km", km: 3 },
      { day: "Thu", type: "Easy", desc: "3km easy jog", pace: "7:30-7:45/km", km: 3 },
      { day: "Sat", type: "Long", desc: "5km easy run", pace: "7:30-7:45/km", km: 5 },
    ],
    herTotal: 15, himTotal: 11,
  },
  {
    phase: "Base Building",
    week: 4,
    her: [
      { day: "Tue", type: "Easy", desc: "4km easy run", pace: "7:00-7:15/km", km: 4 },
      { day: "Thu", type: "Easy", desc: "3km recovery", pace: "7:30/km", km: 3 },
      { day: "Sat", type: "Long", desc: "5km easy (deload)", pace: "7:15/km", km: 5 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "3km easy", pace: "7:30/km", km: 3 },
      { day: "Thu", type: "Easy", desc: "2.5km recovery", pace: "8:00/km", km: 2.5 },
      { day: "Sat", type: "Long", desc: "4km easy (deload)", pace: "7:30/km", km: 4 },
    ],
    herTotal: 12, himTotal: 9.5,
    deload: true,
  },

  // Phase 2: Building Volume (Weeks 5-8)
  {
    phase: "Building Volume",
    week: 5,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "7:00/km", km: 5 },
      { day: "Thu", type: "Tempo", desc: "5km with 3km @ 6:30-6:45", pace: "6:30-6:45 middle", km: 5 },
      { day: "Sat", type: "Long", desc: "9km long run", pace: "7:00-7:15/km", km: 9 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "4km easy run", pace: "7:15-7:30/km", km: 4 },
      { day: "Thu", type: "Easy", desc: "4km easy run", pace: "7:15-7:30/km", km: 4 },
      { day: "Sat", type: "Long", desc: "6km long run", pace: "7:15-7:30/km", km: 6 },
    ],
    herTotal: 19, himTotal: 14,
  },
  {
    phase: "Building Volume",
    week: 6,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:50-7:00/km", km: 5 },
      { day: "Thu", type: "Intervals", desc: "6km: 5×800m @ 6:00, 400m jog", pace: "6:00/km repeats", km: 6 },
      { day: "Sat", type: "Long", desc: "11km long run", pace: "7:00/km", km: 11 },
      { day: "Mon", type: "Easy", desc: "4km recovery", pace: "7:15/km", km: 4 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "4km easy run", pace: "7:15/km", km: 4 },
      { day: "Thu", type: "Tempo", desc: "5km with 2km @ 6:45", pace: "6:45 middle", km: 5 },
      { day: "Sat", type: "Long", desc: "7km long run", pace: "7:15/km", km: 7 },
    ],
    herTotal: 26, himTotal: 16,
  },
  {
    phase: "Building Volume",
    week: 7,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:50-7:00/km", km: 5 },
      { day: "Thu", type: "Tempo", desc: "6km with 4km @ 6:30", pace: "6:30/km middle", km: 6 },
      { day: "Sat", type: "Long", desc: "13km long run", pace: "6:50-7:00/km", km: 13 },
      { day: "Mon", type: "Easy", desc: "4km recovery", pace: "7:15/km", km: 4 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "7:00-7:15/km", km: 5 },
      { day: "Thu", type: "Intervals", desc: "5km: 4×800m @ 6:15, 400m jog", pace: "6:15/km repeats", km: 5 },
      { day: "Sat", type: "Long", desc: "8km long run", pace: "7:00-7:15/km", km: 8 },
    ],
    herTotal: 28, himTotal: 18,
  },
  {
    phase: "Building Volume",
    week: 8,
    her: [
      { day: "Tue", type: "Easy", desc: "4km easy", pace: "7:00/km", km: 4 },
      { day: "Thu", type: "Easy", desc: "4km easy", pace: "7:00/km", km: 4 },
      { day: "Sat", type: "Long", desc: "8km easy (deload)", pace: "7:00/km", km: 8 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "4km easy", pace: "7:15/km", km: 4 },
      { day: "Thu", type: "Easy", desc: "3km recovery", pace: "7:30/km", km: 3 },
      { day: "Sat", type: "Long", desc: "6km easy (deload)", pace: "7:15/km", km: 6 },
    ],
    herTotal: 16, himTotal: 13,
    deload: true,
  },

  // Phase 3: Race Specific (Weeks 9-12)
  {
    phase: "Race Specific",
    week: 9,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:45-7:00/km", km: 5 },
      { day: "Thu", type: "Tempo", desc: "7km with 5km @ 6:15-6:30", pace: "6:15-6:30 middle", km: 7 },
      { day: "Sat", type: "Long", desc: "15km long run", pace: "6:45-7:00/km", km: 15 },
      { day: "Mon", type: "Easy", desc: "5km recovery", pace: "7:15/km", km: 5 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "7:00/km", km: 5 },
      { day: "Thu", type: "Tempo", desc: "6km with 3km @ 6:30", pace: "6:30 middle", km: 6 },
      { day: "Sat", type: "Long", desc: "10km long run", pace: "7:00/km", km: 10 },
    ],
    herTotal: 32, himTotal: 21,
  },
  {
    phase: "Race Specific",
    week: 10,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:45/km", km: 5 },
      { day: "Thu", type: "Intervals", desc: "8km: 6×1km @ 6:00-6:15, 500m jog", pace: "6:00-6:15 repeats", km: 8 },
      { day: "Sat", type: "Long", desc: "17km long run", pace: "6:40-6:50/km", km: 17 },
      { day: "Mon", type: "Easy", desc: "5km recovery", pace: "7:15/km", km: 5 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:50-7:00/km", km: 5 },
      { day: "Thu", type: "Intervals", desc: "6km: 5×1km @ 6:15, 500m jog", pace: "6:15 repeats", km: 6 },
      { day: "Sat", type: "Long", desc: "12km long run", pace: "6:50-7:00/km", km: 12 },
    ],
    herTotal: 35, himTotal: 23,
  },
  {
    phase: "Race Specific",
    week: 11,
    her: [
      { day: "Tue", type: "Easy", desc: "6km easy run", pace: "6:45/km", km: 6 },
      { day: "Thu", type: "Tempo", desc: "8km with 6km @ 6:15-6:30", pace: "6:15-6:30 middle", km: 8 },
      { day: "Sat", type: "Long", desc: "18km — peak long run", pace: "6:30-6:45/km", km: 18 },
      { day: "Mon", type: "Easy", desc: "5km recovery", pace: "7:00/km", km: 5 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "5km easy run", pace: "6:50/km", km: 5 },
      { day: "Thu", type: "Tempo", desc: "7km with 4km @ 6:15-6:30", pace: "6:15-6:30 middle", km: 7 },
      { day: "Sat", type: "Long", desc: "14km long run", pace: "6:45-7:00/km", km: 14 },
    ],
    herTotal: 37, himTotal: 26,
  },
  {
    phase: "Race Specific",
    week: 12,
    her: [
      { day: "Tue", type: "Easy", desc: "5km easy", pace: "6:45/km", km: 5 },
      { day: "Thu", type: "Easy", desc: "4km easy", pace: "7:00/km", km: 4 },
      { day: "Sat", type: "Long", desc: "10km easy (deload)", pace: "6:45-7:00/km", km: 10 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "4km easy", pace: "7:00/km", km: 4 },
      { day: "Thu", type: "Easy", desc: "3km recovery", pace: "7:15/km", km: 3 },
      { day: "Sat", type: "Long", desc: "8km easy (deload)", pace: "7:00/km", km: 8 },
    ],
    herTotal: 19, himTotal: 15,
    deload: true,
  },

  // Phase 4: Sharpening & Taper (Weeks 13-15)
  {
    phase: "Sharpening",
    week: 13,
    her: [
      { day: "Tue", type: "Tempo", desc: "6km with 4km @ race pace (6:15)", pace: "6:15/km middle", km: 6 },
      { day: "Thu", type: "Intervals", desc: "6km: 4×1km @ 5:50-6:00, 500m jog", pace: "5:50-6:00 repeats", km: 6 },
      { day: "Sat", type: "Long", desc: "14km with last 6km @ race pace", pace: "6:15-6:30 finish", km: 14 },
      { day: "Mon", type: "Easy", desc: "4km recovery", pace: "7:00/km", km: 4 },
    ],
    him: [
      { day: "Tue", type: "Tempo", desc: "6km with 3km @ 6:15-6:30", pace: "6:15-6:30 middle", km: 6 },
      { day: "Thu", type: "Easy", desc: "5km easy", pace: "7:00/km", km: 5 },
      { day: "Sat", type: "Long", desc: "12km long run", pace: "6:45/km", km: 12 },
    ],
    herTotal: 30, himTotal: 23,
  },
  {
    phase: "Taper",
    week: 14,
    her: [
      { day: "Tue", type: "Tempo", desc: "5km with 3km @ race pace", pace: "6:15/km middle", km: 5 },
      { day: "Thu", type: "Easy", desc: "4km easy", pace: "7:00/km", km: 4 },
      { day: "Sat", type: "Long", desc: "10km easy with 2km @ pace", pace: "6:30/km + 6:15 finish", km: 10 },
    ],
    him: [
      { day: "Tue", type: "Tempo", desc: "4km with 2km @ 6:30", pace: "6:30 middle", km: 4 },
      { day: "Thu", type: "Easy", desc: "3km easy", pace: "7:00/km", km: 3 },
      { day: "Sat", type: "Long", desc: "8km easy", pace: "7:00/km", km: 8 },
    ],
    herTotal: 19, himTotal: 15,
  },
  {
    phase: "Race Week",
    week: 15,
    her: [
      { day: "Tue", type: "Easy", desc: "3km shakeout + 4×100m strides", pace: "easy + fast strides", km: 3 },
      { day: "Thu", type: "Easy", desc: "2km very easy shakeout", pace: "7:00+/km", km: 2 },
      { day: "Sun", type: "Race", desc: "HALF MARATHON — 21.1km", pace: "6:00-6:30/km 🏁", km: 21.1 },
    ],
    him: [
      { day: "Tue", type: "Easy", desc: "3km shakeout + strides", pace: "easy", km: 3 },
      { day: "Thu", type: "Easy", desc: "2km very easy", pace: "7:00+/km", km: 2 },
      { day: "Sun", type: "Race", desc: "Pace her or run your own race!", pace: "support crew 🏁", km: "?" },
    ],
    herTotal: 26.1, himTotal: "5+race",
  },
];

const PHASES = ["Base Building", "Building Volume", "Race Specific", "Sharpening", "Taper", "Race Week"];

const TYPE_COLORS = {
  Easy: { bg: "#e8f5e9", text: "#2e7d32", border: "#a5d6a7" },
  Tempo: { bg: "#fff3e0", text: "#e65100", border: "#ffcc80" },
  Intervals: { bg: "#fce4ec", text: "#c62828", border: "#ef9a9a" },
  Long: { bg: "#e3f2fd", text: "#1565c0", border: "#90caf9" },
  Race: { bg: "#f3e5f5", text: "#6a1b9a", border: "#ce93d8" },
};

const PHASE_COLORS = {
  "Base Building": "#4caf50",
  "Building Volume": "#ff9800",
  "Race Specific": "#f44336",
  "Sharpening": "#9c27b0",
  "Taper": "#2196f3",
  "Race Week": "#e91e63",
};

export default function TrainingPlan() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [view, setView] = useState("her");

  const week = WEEKS[selectedWeek];
  const runs = view === "her" ? week.her : week.him;
  const total = view === "her" ? week.herTotal : week.himTotal;
  const currentPhase = week.phase;

  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      maxWidth: 720,
      margin: "0 auto",
      padding: "20px 16px",
      color: "#1a1a1a",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #fafafa 0%, #f0ede8 100%)",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{
          fontSize: 11,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#999",
          marginBottom: 6,
        }}>15-Week Program</div>
        <h1 style={{
          fontFamily: "'Georgia', serif",
          fontSize: 28,
          fontWeight: 400,
          margin: 0,
          letterSpacing: -0.5,
          lineHeight: 1.2,
        }}>Half Marathon<br />Training Plan</h1>
        <div style={{
          fontSize: 12,
          color: "#888",
          marginTop: 8,
        }}>4km → 21.1km • 103 days • Goal: 6:00–6:30/km</div>
      </div>

      {/* Runner Toggle */}
      <div style={{
        display: "flex",
        gap: 0,
        marginBottom: 20,
        border: "1px solid #ccc",
        borderRadius: 6,
        overflow: "hidden",
      }}>
        {[
          { key: "her", label: "Her Plan", sub: "4km → Half Marathon" },
          { key: "him", label: "Your Plan", sub: "Comeback companion" },
        ].map(({ key, label, sub }) => (
          <button
            key={key}
            onClick={() => setView(key)}
            style={{
              flex: 1,
              padding: "12px 8px",
              border: "none",
              cursor: "pointer",
              background: view === key ? "#1a1a1a" : "#fff",
              color: view === key ? "#fff" : "#666",
              transition: "all 0.2s",
              borderRight: key === "her" ? "1px solid #ccc" : "none",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "'Georgia', serif" }}>{label}</div>
            <div style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>{sub}</div>
          </button>
        ))}
      </div>

      {/* Phase Bar */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 2, height: 6, borderRadius: 3, overflow: "hidden" }}>
          {WEEKS.map((w, i) => (
            <div
              key={i}
              onClick={() => setSelectedWeek(i)}
              style={{
                flex: 1,
                background: i === selectedWeek
                  ? PHASE_COLORS[w.phase]
                  : `${PHASE_COLORS[w.phase]}33`,
                cursor: "pointer",
                transition: "all 0.2s",
                borderRadius: 1,
              }}
            />
          ))}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          color: "#aaa",
          marginTop: 4,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}>
          <span>Wk 1</span>
          <span>Wk 15</span>
        </div>
      </div>

      {/* Week Selector */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(15, 1fr)",
        gap: 3,
        marginBottom: 20,
      }}>
        {WEEKS.map((w, i) => (
          <button
            key={i}
            onClick={() => setSelectedWeek(i)}
            style={{
              padding: "8px 0",
              border: i === selectedWeek ? `2px solid ${PHASE_COLORS[w.phase]}` : "1px solid #ddd",
              borderRadius: 4,
              background: i === selectedWeek ? PHASE_COLORS[w.phase] : w.deload ? "#f5f5f0" : "#fff",
              color: i === selectedWeek ? "#fff" : "#666",
              cursor: "pointer",
              fontSize: 10,
              fontWeight: i === selectedWeek ? 700 : 400,
              fontFamily: "'Courier New', monospace",
              transition: "all 0.15s",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Week Detail Card */}
      <div style={{
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 20,
        marginBottom: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <div style={{
              fontSize: 10,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: PHASE_COLORS[currentPhase],
              fontWeight: 600,
              marginBottom: 4,
            }}>{currentPhase}{week.deload ? " — Deload" : ""}</div>
            <div style={{
              fontFamily: "'Georgia', serif",
              fontSize: 22,
              fontWeight: 400,
            }}>Week {week.week}</div>
          </div>
          <div style={{
            textAlign: "right",
            background: "#f8f8f6",
            padding: "8px 12px",
            borderRadius: 6,
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Courier New', monospace" }}>{total}</div>
            <div style={{ fontSize: 9, color: "#999", letterSpacing: 1, textTransform: "uppercase" }}>km total</div>
          </div>
        </div>

        {/* Runs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {runs.map((run, i) => {
            const colors = TYPE_COLORS[run.type] || TYPE_COLORS.Easy;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: 0,
                  borderRadius: 6,
                  overflow: "hidden",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{
                  width: 48,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: colors.bg,
                  padding: "10px 0",
                  borderRight: `1px solid ${colors.border}`,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: colors.text }}>{run.day}</div>
                </div>
                <div style={{ flex: 1, padding: "10px 14px", background: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: colors.text,
                    }}>{run.type}</span>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: "'Courier New', monospace",
                      color: "#333",
                    }}>{run.km}km</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#333", lineHeight: 1.3 }}>{run.desc}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{run.pace}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Volume Chart */}
      <div style={{
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 20,
        marginBottom: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#999",
          marginBottom: 12,
        }}>Weekly Volume (km)</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 80 }}>
          {WEEKS.map((w, i) => {
            const val = view === "her" ? w.herTotal : (typeof w.himTotal === "number" ? w.himTotal : 5);
            const maxVal = 37;
            const h = (val / maxVal) * 100;
            return (
              <div
                key={i}
                onClick={() => setSelectedWeek(i)}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i === selectedWeek ? PHASE_COLORS[w.phase] : `${PHASE_COLORS[w.phase]}44`,
                  borderRadius: "3px 3px 0 0",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
                title={`Wk ${w.week}: ${val}km`}
              />
            );
          })}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          color: "#bbb",
          marginTop: 4,
        }}>
          {WEEKS.map((w, i) => (
            <span key={i} style={{ flex: 1, textAlign: "center" }}>{i + 1}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "center",
        marginBottom: 20,
      }}>
        {Object.entries(TYPE_COLORS).map(([type, colors]) => (
          <div key={type} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: 2,
              background: colors.text,
            }} />
            <span style={{ fontSize: 10, color: "#888" }}>{type}</span>
          </div>
        ))}
      </div>

      {/* Key Principles */}
      <div style={{
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 20,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#999",
          marginBottom: 12,
        }}>Key Principles</div>
        <div style={{ fontSize: 12, lineHeight: 1.8, color: "#555" }}>
          <p style={{ margin: "0 0 8px" }}>
            <strong style={{ color: "#333" }}>80/20 rule</strong> — ~80% of runs at easy/conversational pace, ~20% hard.
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <strong style={{ color: "#333" }}>Every 4th week is a deload</strong> — volume drops ~30% to let your body absorb training.
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <strong style={{ color: "#333" }}>Long runs are king</strong> — build distance slowly. Never increase by more than 2km per week.
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <strong style={{ color: "#333" }}>Run together on easy days</strong> — her easy pace will match your effort level early on. Great for accountability.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "#333" }}>Skip a run before you push through pain</strong> — consistency over heroics. If something hurts, walk.
          </p>
        </div>
      </div>

      <div style={{
        textAlign: "center",
        fontSize: 10,
        color: "#ccc",
        marginTop: 20,
        letterSpacing: 2,
      }}>
        ♡ BUILT FOR TWO
      </div>
    </div>
  );
}
