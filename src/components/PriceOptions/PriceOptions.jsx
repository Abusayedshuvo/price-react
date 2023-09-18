import axios from "axios";
import { useState } from "react";
import PriceOption from "./PriceOption";
// import PropTypes from "prop-types";

const PriceOptions = () => {
  const [prices, setPrice] = useState([]);
  axios.get("./price.json").then((data) => setPrice(data.data));
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-5xl mb-8">Best Price Option</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {prices.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
