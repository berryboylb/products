import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterBysearch } from "../../actions/products";
import { Query } from "../Products";
import { Link } from "react-router-dom";
import Arrow from "../../assets/svgs/arrow.svg";
type Props = {
  filterBysearch: any;
};
const FreeTextSearch: React.FC<Props> = ({ filterBysearch }) => {
  const [text, setText] = useState<string>("");
  const queryParams: Query = {
    page: 1,
    pageSize: 36,
    searchText: text,
    productCategoryTypeIds: [],
    complianceTypeIds: [1, 2],
    sourceTypeIds: [],
  };
  const [formValues, setFormValues] = useState<Query>({
    page: 1,
    pageSize: 36,
    searchText: "",
    productCategoryTypeIds: [],
    complianceTypeIds: [],
    sourceTypeIds: [],
  });

  const categories = [
    {
      id: 1,
      name: "Building materials",
      numbers: [1, 2],
    },
    {
      id: 2,
      name: "Various",
      numbers: [1, 2],
    },
    {
      id: 3,
      name: "ECO design and energy labeling",
      numbers: [1, 2],
    },
    {
      id: 4,
      name: "Elevators and cable car facilities",
      numbers: [1, 2],
    },
    {
      id: 5,
      name: "Electrical products",
      numbers: [1, 2],
    },
    {
      id: 6,
      name: "Fireworks and explosives",
      numbers: [1, 2],
    },
    {
      id: 7,
      name: "Gas products",
      numbers: [1, 2],
    },
    {
      id: 8,
      name: "General product safety",
      numbers: [1, 2],
    },
    {
      id: 9,
      name: "Toy",
      numbers: [1, 2],
    },
    {
      id: 10,
      name: "Machines",
      numbers: [1, 2],
    },
    {
      id: 11,
      name: "Metrology",
      numbers: [1, 2],
    },
    {
      id: 12,
      name: "Personal protection",
      numbers: [1, 2],
    },
  ];

  const product = [
    {
      id: 1,
      name: "Hazardous products",
      numbers: [1, 2],
    },
    {
      id: 2,
      name: "Defective products",
      numbers: [1, 2],
    },
  ];

  const authority = [
    { id: 1, name: "The National Security Agency", numbers: [1, 2] },
  ];

  return (
    <div className="mt-5">
      <div>
        <h3 className="flex items-center  font-sora text-secondary text-base font-semibold lg:text-sm">
          {" "}
          <img
            className="w-[20px] h-[20px]  object-contain mr-[10px]"
            src={Arrow}
            alt="arrow"
          />{" "}
          Filter By Product Type
        </h3>
        {product.map((item) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input type="checkbox" /> <span>{item.name}</span>
          </p>
        ))}
      </div>
      <div className="mt-5">
        <h3 className="flex items-center  font-sora text-secondary text-base font-semibold lg:text-sm">
          {" "}
          <img
            className="w-[20px] h-[20px]  object-contain mr-[10px]"
            src={Arrow}
            alt="arrow"
          />{" "}
          Filter by product category
        </h3>
        {categories.map((item) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input type="checkbox" /> <span>{item.name}</span>
          </p>
        ))}
      </div>
      <div className="mt-5">
        <h3 className="flex items-center  font-sora text-secondary text-base font-semibold lg:text-sm">
          <img
            className="w-[20px] h-[20px]  object-contain mr-[10px]"
            src={Arrow}
            alt="arrow"
          />{" "}
          Filter by authority
        </h3>
        {authority.map((item) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input type="checkbox" /> <span>{item.name}</span>
          </p>
        ))}
      </div>
      <button className="mt-5 text-primary border border-primary font-sm p-2 rounded-lg ">
        Clear Filters
      </button>

      <div className="mt-5">
        <h3 className="flex items-center  font-sora text-secondary text-base font-semibold lg:text-sm">
          <img
            className="w-[20px] h-[20px]  object-contain mr-[10px]"
            src={Arrow}
            alt="arrow"
          />{" "}
          Get more knowledge about products
        </h3>

        <ul>
          <li className="list-disc">
            If you want a tip about new dangerous products on an ongoing basis,
            you can follow the Swedish Safety Agency on{" "}
            <Link
              className=" text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm"
              to="/"
            >
              Facebook
            </Link>{" "}
            or{" "}
            <Link
              className=" text-primary hover:underline text-base my-2 font-sora font-medium lg:text-sm"
              to="/"
            >
              Twitter
            </Link>
          </li>
          <li className="list-disc mt-2">
            We have an API for the register of dangerous and defective products.
            Contact us if you want to retrieve data for your company.
          </li>
          <li className="list-disc mt-2">
            Get the results of your search as a CSV file (can be opened in, for
            example, Excel)
          </li>
        </ul>

        <button className="mt-5 text-primary border border-primary font-sm p-2 rounded-lg ">
          Download CSV
        </button>
      </div>
    </div>
  );
};

FreeTextSearch.propTypes = {
  filterBysearch: PropTypes.func.isRequired,
};

export default connect(null, { filterBysearch })(FreeTextSearch);
