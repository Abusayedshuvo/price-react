import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <>
      <li className="px-5 py-2">
        <a href={route.path}> {route.name} </a>
      </li>
    </>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
