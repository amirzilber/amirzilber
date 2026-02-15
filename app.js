const API_BASE = "https://financialmodelingprep.com/api/v3";
const API_KEY = "demo";

const fallbackQuotes = [
  { symbol: "SPY", name: "SPDR S&P 500 ETF", price: 521.1, change: 2.2, changesPercentage: 0.42 },
  { symbol: "QQQ", name: "Invesco QQQ", price: 449.3, change: -1.5, changesPercentage: -0.33 },
  { symbol: "DIA", name: "SPDR Dow Jones", price: 392.7, change: 1.9, changesPercentage: 0.49 },
  { symbol: "AAPL", name: "Apple Inc.", price: 194.1, change: 0.8, changesPercentage: 0.41 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 420.6, change: 3.1, changesPercentage: 0.74 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 118.2, change: -2.2, changesPercentage: -1.83 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 181.3, change: -1.1, changesPercentage: -0.6 },
];

const fallbackGainers = [
  { ticker: "AMD", changesPercentage: "+3.42%", price: "189.32" },
  { ticker: "PLTR", changesPercentage: "+3.10%", price: "24.11" },
  { ticker: "SHOP", changesPercentage: "+2.85%", price: "71.92" },
];

const fallbackLosers = [
  { ticker: "BABA", changesPercentage: "-2.95%", price: "77.18" },
  { ticker: "RIVN", changesPercentage: "-2.55%", price: "11.32" },
  { ticker: "NIO", changesPercentage: "-2.21%", price: "5.42" },
];

const refs = {
  symbolsInput: document.getElementById("symbols"),
  refreshBtn: document.getElementById("refreshBtn"),
  marketSummary: document.getElementById("marketSummary"),
  quotesBody: document.getElementById("quotesBody"),
  gainersList: document.getElementById("gainersList"),
  losersList: document.getElementById("losersList"),
};

function cls(value) {
  return value >= 0 ? "up" : "down";
}

function trendLabel(value) {
  if (value >= 1) return "מומנטום חיובי";
  if (value > 0) return "עלייה מתונה";
  if (value <= -1) return "מומנטום שלילי";
  return "ירידה מתונה";
}

function renderSummary(quotes) {
  const positives = quotes.filter((q) => q.changesPercentage >= 0).length;
  const negatives = quotes.length - positives;
  const avgChange = quotes.reduce((sum, q) => sum + q.changesPercentage, 0) / quotes.length;
  const leader = quotes.slice().sort((a, b) => b.changesPercentage - a.changesPercentage)[0];

  refs.marketSummary.innerHTML = `
    <div class="card">
      <div class="label">מניות בירוק</div>
      <div class="${cls(positives - negatives)}">${positives}</div>
    </div>
    <div class="card">
      <div class="label">מניות באדום</div>
      <div class="${cls(negatives - positives)}">${negatives}</div>
    </div>
    <div class="card">
      <div class="label">שינוי ממוצע</div>
      <div class="${cls(avgChange)}">${avgChange.toFixed(2)}%</div>
    </div>
    <div class="card">
      <div class="label">המובילה כרגע</div>
      <div>${leader.symbol} (${leader.changesPercentage.toFixed(2)}%)</div>
    </div>
  `;
}

function renderQuotes(quotes) {
  refs.quotesBody.innerHTML = quotes
    .map(
      (q) => `
        <tr>
          <td>${q.symbol}</td>
          <td>${q.name ?? "-"}</td>
          <td>$${Number(q.price).toFixed(2)}</td>
          <td class="${cls(q.change)}">${Number(q.change).toFixed(2)}</td>
          <td class="${cls(q.changesPercentage)}">${Number(q.changesPercentage).toFixed(2)}%</td>
          <td>${trendLabel(Number(q.changesPercentage))}</td>
        </tr>
      `,
    )
    .join("");
}

function renderMovers(listElement, items) {
  listElement.innerHTML = items
    .slice(0, 5)
    .map((item) => `<li><strong>${item.ticker}</strong> - $${item.price} (${item.changesPercentage})</li>`)
    .join("");
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadDashboard() {
  const symbols = refs.symbolsInput.value
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean)
    .join(",");

  try {
    const [quotes, gainers, losers] = await Promise.all([
      fetchJson(`${API_BASE}/quote/${symbols}?apikey=${API_KEY}`),
      fetchJson(`${API_BASE}/stock_market/gainers?apikey=${API_KEY}`),
      fetchJson(`${API_BASE}/stock_market/losers?apikey=${API_KEY}`),
    ]);

    const safeQuotes = Array.isArray(quotes) && quotes.length ? quotes : fallbackQuotes;
    renderSummary(safeQuotes);
    renderQuotes(safeQuotes);
    renderMovers(refs.gainersList, Array.isArray(gainers) && gainers.length ? gainers : fallbackGainers);
    renderMovers(refs.losersList, Array.isArray(losers) && losers.length ? losers : fallbackLosers);
  } catch (error) {
    console.warn("Falling back to sample data:", error.message);
    renderSummary(fallbackQuotes);
    renderQuotes(fallbackQuotes);
    renderMovers(refs.gainersList, fallbackGainers);
    renderMovers(refs.losersList, fallbackLosers);
  }
}

refs.refreshBtn.addEventListener("click", loadDashboard);
loadDashboard();
