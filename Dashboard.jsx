import React from "react";

const metrics = [
  { label: "Revenue", value: "$128.4k", delta: "+12.4%" },
  { label: "Active users", value: "8,942", delta: "+8.1%" },
  { label: "Conversion", value: "4.72%", delta: "+1.3%" },
  { label: "Bounce rate", value: "31.8%", delta: "-2.9%" },
];

const activity = [
  { name: "Northstar Mobile", status: "On track", value: "$24.1k" },
  { name: "Aster Analytics", status: "Needs review", value: "$18.7k" },
  { name: "Pulse Commerce", status: "Growing", value: "$39.5k" },
  { name: "Cloudline", status: "Paused", value: "$8.2k" },
];

const chartBars = [72, 54, 68, 83, 61, 74, 88, 69, 57, 76, 91, 84];

export default function Dashboard() {
  return (
    <div style={styles.page}>
      <div style={styles.backdropA} />
      <div style={styles.backdropB} />

      <main style={styles.shell}>
        <section style={styles.hero}>
          <div>
            <p style={styles.kicker}>Overview</p>
            <h1 style={styles.title}>A clean, modern React dashboard.</h1>
            <p style={styles.subtitle}>
              Track growth, monitor activity, and surface the most important numbers at a glance.
            </p>
          </div>

          <div style={styles.heroCard}>
            <p style={styles.heroCardLabel}>This month</p>
            <div style={styles.heroCardValue}>+18.2%</div>
            <p style={styles.heroCardNote}>Strong momentum across product and marketing channels.</p>
          </div>
        </section>

        <section style={styles.gridTop}>
          {metrics.map((metric) => (
            <article key={metric.label} style={styles.metricCard}>
              <p style={styles.metricLabel}>{metric.label}</p>
              <div style={styles.metricValueRow}>
                <strong style={styles.metricValue}>{metric.value}</strong>
                <span style={styles.metricDelta}>{metric.delta}</span>
              </div>
            </article>
          ))}
        </section>

        <section style={styles.contentGrid}>
          <article style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>Weekly performance</h2>
                <p style={styles.cardSubtitle}>A simple visual snapshot of the current trend.</p>
              </div>
              <span style={styles.pill}>Live</span>
            </div>

            <div style={styles.chart}>
              {chartBars.map((height, index) => (
                <div key={index} style={styles.barColumn}>
                  <div style={{ ...styles.bar, height: `${height}%` }} />
                </div>
              ))}
            </div>
          </article>

          <article style={styles.activityCard}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>Top accounts</h2>
                <p style={styles.cardSubtitle}>Recent account activity and status.</p>
              </div>
            </div>

            <div style={styles.list}>
              {activity.map((item) => (
                <div key={item.name} style={styles.listItem}>
                  <div>
                    <div style={styles.listName}>{item.name}</div>
                    <div style={styles.listStatus}>{item.status}</div>
                  </div>
                  <strong style={styles.listValue}>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(255, 183, 77, 0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(74, 222, 128, 0.16), transparent 26%), #0b1020",
    color: "#f5f7fb",
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    position: "relative",
    overflow: "hidden",
    padding: "40px 20px",
  },
  backdropA: {
    position: "absolute",
    inset: "8% auto auto 6%",
    width: 240,
    height: 240,
    borderRadius: "999px",
    background: "rgba(96, 165, 250, 0.2)",
    filter: "blur(70px)",
  },
  backdropB: {
    position: "absolute",
    inset: "auto 8% 10% auto",
    width: 280,
    height: 280,
    borderRadius: "999px",
    background: "rgba(251, 191, 36, 0.18)",
    filter: "blur(80px)",
  },
  shell: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gap: 24,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.6fr) minmax(280px, 0.8fr)",
    gap: 24,
    alignItems: "stretch",
  },
  kicker: {
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#8fb3ff",
    fontSize: 12,
    fontWeight: 700,
  },
  title: {
    margin: "10px 0 12px",
    fontSize: "clamp(2.4rem, 5vw, 4.6rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    maxWidth: 10,
  },
  subtitle: {
    margin: 0,
    maxWidth: 640,
    color: "rgba(245, 247, 251, 0.72)",
    fontSize: "1.04rem",
    lineHeight: 1.6,
  },
  heroCard: {
    background: "linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.72))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 30px 80px rgba(0, 0, 0, 0.28)",
    display: "grid",
    alignContent: "space-between",
    minHeight: 220,
  },
  heroCardLabel: {
    margin: 0,
    color: "rgba(245, 247, 251, 0.62)",
    fontSize: 14,
  },
  heroCardValue: {
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
    fontWeight: 800,
    letterSpacing: "-0.06em",
    marginTop: 10,
  },
  heroCardNote: {
    margin: 0,
    color: "rgba(245, 247, 251, 0.7)",
    lineHeight: 1.55,
  },
  gridTop: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
  },
  metricCard: {
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(148, 163, 184, 0.16)",
    borderRadius: 22,
    padding: 20,
    backdropFilter: "blur(18px)",
  },
  metricLabel: {
    margin: 0,
    color: "rgba(245, 247, 251, 0.58)",
    fontSize: 14,
  },
  metricValueRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 14,
  },
  metricValue: {
    fontSize: "clamp(1.55rem, 2vw, 2.1rem)",
    letterSpacing: "-0.04em",
  },
  metricDelta: {
    fontSize: 13,
    color: "#86efac",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.5fr) minmax(340px, 0.9fr)",
    gap: 16,
  },
  chartCard: {
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(148, 163, 184, 0.16)",
    borderRadius: 28,
    padding: 24,
    minHeight: 360,
  },
  activityCard: {
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(148, 163, 184, 0.16)",
    borderRadius: 28,
    padding: 24,
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 22,
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    letterSpacing: "-0.03em",
  },
  cardSubtitle: {
    margin: "6px 0 0",
    color: "rgba(245, 247, 251, 0.62)",
    fontSize: 14,
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    color: "#bef264",
    background: "rgba(132, 204, 22, 0.12)",
    border: "1px solid rgba(132, 204, 22, 0.18)",
  },
  chart: {
    display: "grid",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    gap: 10,
    alignItems: "end",
    height: 260,
    paddingTop: 10,
  },
  barColumn: {
    height: "100%",
    display: "flex",
    alignItems: "end",
  },
  bar: {
    width: "100%",
    borderRadius: "16px 16px 6px 6px",
    background: "linear-gradient(180deg, #60a5fa 0%, #34d399 100%)",
    boxShadow: "0 14px 28px rgba(52, 211, 153, 0.16)",
    minHeight: 24,
  },
  list: {
    display: "grid",
    gap: 14,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "16px 0",
    borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
  },
  listName: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  listStatus: {
    marginTop: 5,
    color: "rgba(245, 247, 251, 0.6)",
    fontSize: 13,
  },
  listValue: {
    fontSize: 16,
    color: "#f8fafc",
  },
};