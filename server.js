import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || "/data";
const DATA_FILE = path.join(DATA_DIR, "progress.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readData() {
  try {
    if (!fs.existsSync(DATA_FILE)) return { checked: {}, adjust: {} };
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (e) {
    console.error("Failed to read data:", e);
    return { checked: {}, adjust: {} };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const app = express();
app.use(express.json());

// API
app.get("/api/progress", (req, res) => {
  res.json(readData());
});

app.post("/api/progress", (req, res) => {
  const { checked, adjust } = req.body || {};
  const data = readData();
  if (checked && typeof checked === "object") data.checked = checked;
  if (adjust && typeof adjust === "object") data.adjust = adjust;
  writeData(data);
  res.json({ ok: true });
});

app.get("/api/health", (req, res) => res.json({ ok: true }));

// Serve built frontend
const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}, data at ${DATA_FILE}`);
});
