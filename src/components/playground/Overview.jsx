import styles from "./playground.module.css";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h5>Postman Clone</h5>
      <p>
        Postman is an API platform for building and using APIs. This clone
        application of Postman simplifies each step of the API lifecycle and
        streamlines collaboration so you can create better APIs—faster. This app
        is a cloned version of the desktop app, built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          React
        </a>{" "}
        and{" "}
        <a
          href="https://axios-http.com/"
          target="_blank"
          rel="noopener noreferrer">
          Axios
        </a>
        .
      </p>

      <p>Features include:</p>
      <ul>
        <li>Postman Desktop UI</li>
        <li>API client (powered by axios)</li>
        <li>Test common REST API methods (Get, Post, Put, Patch and Delete)</li>
        <li>Supports Query params, Request headers, Authentication headers</li>
        <li>JSON Response (Pretty/Raw) viewer</li>
        <li>API Log</li>
        <li>Dark mode support</li>
      </ul>

      <p>
        <small>
          Developed by{" "}
          <a
            href="https://manojbarman.in"
            target="_blank"
            rel="noopener noreferrer">
            Manoj B
          </a>{" "}
        </small>
      </p>
    </div>
  );
};

export default Overview;
