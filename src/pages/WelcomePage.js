import React from "react";

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Trade Help!</h1>
      <p style={styles.paragraph}>
        Welcome to Trade Help, the ultimate companion for stock traders looking
        to optimize their trading strategies and keep meticulous records of
        their performance. Our app is designed to provide you with essential
        tools and features that make managing your trades and tracking your
        progress easier than ever. Here’s what you can expect from Trade Help:
      </p>
      <h2 style={styles.subtitle}>Stock Average Calculator</h2>
      <p style={styles.paragraph}>
        Simplify your trading calculations with our intuitive Stock Average
        Calculator. Just enter the number of shares for each trade and their
        respective prices, and let our calculator do the rest. With a single
        click on the 'Calculate' button, you’ll get detailed insights including:
      </p>
      <ul style={styles.list}>
        <li>Total Shares: The sum of all shares entered.</li>
        <li>Total Cost: The combined cost of all your trades.</li>
        <li>Average Price: The average price per share across all trades.</li>
        <li>
          Profit/Loss Percentage: See your potential profit or loss when the
          stock hits a specified price. Our calculator will provide a clear
          percentage, current share prices, cost basis, and a profit/loss
          summary.
        </li>
      </ul>
      <h2 style={styles.subtitle}>Private Notes</h2>
      <p style={styles.paragraph}>
        Keep your thoughts and strategies organized with our private notes
        feature. Using IndexDB, your notes will be securely stored on your
        device, ensuring your data persists even if you close the app or refresh
        the page. Jot down trading ideas, strategies, and observations to refine
        your approach over time.
      </p>
      <h2 style={styles.subtitle}>Trading Calendar</h2>
      <p style={styles.paragraph}>
        Track your daily performance with our comprehensive Trading Calendar.
        Easily upload your profit and loss (P/L) data from Think or Swim, and
        watch as the calendar populates with your trading results for each day.
        At a glance, you’ll see:
      </p>
      <ul style={styles.list}>
        <li>
          Daily P/L: Know whether you made or lost money each day, and by how
          much.
        </li>
        <li>
          Weekly Summary: A summary column that consolidates your weekly
          performance.
        </li>
        <li>
          Monthly Summary: At the beginning of each month, view a summary of
          your gains or losses, along with quarterly performance metrics.
        </li>
      </ul>
      <p style={styles.paragraph}>
        With Trade Help, you’ll have all the tools you need to stay organized,
        make informed trading decisions, and keep a close eye on your financial
        progress. Start using Trade Help today and take control of your trading
        journey!
      </p>
    </div>
  );
};

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
  subtitle: {
    marginTop: "20px",
    color: "#1E90FF",
  },
  paragraph: {
    marginBottom: "20px",
    fontSize: "1.2rem",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
};

export default WelcomePage;
