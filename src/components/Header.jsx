import PropTypes from "prop-types";

export default function Header({ children, text }) {
  return (
    <header
      style={{
        marginBottom: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginRight: "1rem" }}>{text}</h2>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};
