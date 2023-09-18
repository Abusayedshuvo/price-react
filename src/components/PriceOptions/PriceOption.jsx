import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  // console.log(option);
  const { name, price, features } = option;
  return (
    <div className="bg-slate-200 p-6 rounded-lg flex flex-col">
      <h3 className="text-2xl">$ {price} </h3>
      <h1 className="text-3xl my-5">{name}</h1>
      <div className="flex-grow">
        {features.map((feature, id) => (
          <p className="text-sm" key={id}>
            {id + 1}. {feature}
          </p>
        ))}
      </div>
      <div className="text-center pt-6">
        <button className="bg-black text-white px-10 py-2 rounded-lg text-center">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
