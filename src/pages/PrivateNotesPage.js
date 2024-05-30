import React from "react";

const PrivateNotesPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Private Notes (Coming Soon)</h2>
      <p style={styles.paragraph}>
        Stay organized and keep track of your trading strategies with our
        upcoming Private Notes feature. This tool will allow you to jot down
        your thoughts, ideas, and observations securely. Using IndexDB, your
        notes will be safely stored on your device, ensuring they remain
        available even if you close the app or refresh the page. Stay tuned for
        this exciting feature that will help you refine your trading approach
        and keep your insights all in one place!
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
  paragraph: {
    marginBottom: "20px",
  },
};

export default PrivateNotesPage;
