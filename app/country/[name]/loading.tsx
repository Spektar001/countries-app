import "./loading.css";

const loading = () => {
  return (
    <section className="section">
      <svg
        className="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          stroke-width="5"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </section>
  );
};

export default loading;
