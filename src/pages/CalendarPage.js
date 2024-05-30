import React from "react";

function CalendarPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Trading Calendar (Coming Soon)</h2>
      <p style={styles.paragraph}>
        Easily monitor your daily performance with our upcoming Trading
        Calendar. This feature will allow you to upload your profit and loss
        (P/L) data from Think or Swim, and the calendar will automatically
        populate with your trading results for each day. At a glance, you’ll be
        able to see whether you made or lost money each day, along with weekly
        and monthly summaries. This tool will help you keep track of your
        financial progress and make informed trading decisions. Stay tuned for
        this powerful addition to Trade Help!
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
  },
  title: {
    textAlign: "center",
    color: "#1E90FF",
  },
  paragraph: {
    marginBottom: "20px",
  },
};

export default CalendarPage;
