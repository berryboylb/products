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
  //create an object as query parms
  const [formValues, setFormValues] = useState<Query>({
    page: 1,
    pageSize: 36,
    searchText: "",
    productCategoryTypeIds: [],
    complianceTypeIds: [],
    sourceTypeIds: [],
  });

  //filter by products
  const addProduct = (arr: number[]) => {
    //create a new array and manipulate here
    const newArr = formValues.complianceTypeIds;
    arr.forEach((item: number) => {
      newArr.push(item);
    });

    setFormValues({
      ...formValues,
      complianceTypeIds: newArr,
    });

  };

  const removeProduct = (arr: number[]) => {
    const newArr = formValues.complianceTypeIds;
    //get index and remove them here
    arr.forEach((item: number) => {
      newArr.splice(newArr.indexOf(item), 1);
    });
    setFormValues({
      ...formValues,
      complianceTypeIds: newArr,
    });
  };

  //filter by category
  const addCategory = (arr: number[]) => {
    //create a new array and manipulate here
    const newArr = formValues.productCategoryTypeIds;
    arr.forEach((item: number) => {
      newArr.push(item);
    });

    setFormValues({
      ...formValues,
      productCategoryTypeIds: newArr,
    });

  };

  const removeCategory = (arr: number[]) => {
    const newArr = formValues.productCategoryTypeIds;
    //get index and remove them here
    arr.forEach((item: number) => {
      newArr.splice(newArr.indexOf(item), 1);
    });
    setFormValues({
      ...formValues,
      productCategoryTypeIds: newArr,
    });
  };

  //filter by  authority
  const addAuthority = (arr: number[]) => {
    //create a new array and manipulate here
    const newArr = formValues.sourceTypeIds;
    arr.forEach((item: number) => {
      newArr.push(item);
    });

    setFormValues({
      ...formValues,
      sourceTypeIds: newArr,
    });

  };

  const removeAuth = (arr: number[]) => {
    const newArr = formValues.sourceTypeIds;
    //get index and remove them here
    arr.forEach((item: number) => {
      newArr.splice(newArr.indexOf(item), 1);
    });
    setFormValues({
      ...formValues,
      sourceTypeIds: newArr,
    });
    console.log(formValues);
  };

  const handleRequests = () => {
    filterBysearch(formValues);
  };

  const clearFilters = () => {
    setFormValues({ ...formValues, complianceTypeIds: [] });
    setCategories((prevCatgories) =>
      prevCatgories.map((item: List) => ({ ...item, status: false }))
    );
    setProduct((prevProducts) =>
      prevProducts.map((item: List) => ({ ...item, status: false }))
    );
    setAuthorities((prevAuthorities) =>
      prevAuthorities.map((item: List) => ({ ...item, status: false }))
    );
  };

  type List = { id: number; name: string; numbers: number[]; status: boolean };

  const [categories, setCategories] = useState<List[]>([
    {
      id: 1,
      name: "Building materials",
      numbers: [6],
      status: false,
    },
    {
      id: 2,
      name: "Various",
      numbers: [8,25],
      status: false,
    },
    {
      id: 3,
      name: "ECO design and energy labeling",
      numbers: [19, 20],
      status: false,
    },
    {
      id: 4,
      name: "Elevators and cable car facilities",
      numbers: [55],
      status: false,
    },
    {
      id: 5,
      name: "Electrical products",
      numbers: [9,7,4,5],
      status: false,
    },
    {
      id: 6,
      name: "Fireworks and explosives",
      numbers: [10],
      status: false,
    },
    {
      id: 7,
      name: "Gas products",
      numbers: [16],
      status: false,
    },
    {
      id: 8,
      name: "General product safety",
      numbers: [1],
      status: false,
    },
    {
      id: 9,
      name: "Toy",
      numbers: [2],
      status: false,
    },
    {
      id: 10,
      name: "Machines",
      numbers: [11],
      status: false,
    },
    {
      id: 11,
      name: "Metrology",
      numbers: [36],
      status: false,
    },
    {
      id: 12,
      name: "Personal protection",
      numbers: [3],
      status: false,
    },
  ]);

  const [product, setProduct] = useState<List[]>([
    {
      id: 1,
      name: "Hazardous products",
      numbers: [2],
      status: false,
    },
    {
      id: 2,
      name: "Defective products",
      numbers: [1],
      status: false,
    },
  ]);

  const [authority, setAuthorities] = useState<List[]>([
    {
      id: 1,
      name: "The National Security Agency",
      numbers: [1],
      status: false,
    },
  ]);

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
        {product.map((item: List) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => {
                setProduct((prevProduct) =>
                  prevProduct.map((list: List) =>
                    list.id === item.id
                      ? { ...list, status: !list.status }
                      : list
                  )
                );
                if (item.status === false) {
                  addProduct(item.numbers);
                } else {
                  removeProduct(item.numbers);
                }
                 handleRequests();
              }}
            />{" "}
            <span>{item.name}</span>
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
        {categories.map((item: List) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => {
                setCategories((prevCategories) =>
                  prevCategories.map((list: List) =>
                    list.id === item.id
                      ? { ...list, status: !list.status }
                      : list
                  )
                );
                if (item.status === false) {
                  addCategory(item.numbers);
                } else {
                  removeCategory(item.numbers);
                }
                 handleRequests();
              }}
            />{" "}
            <span>{item.name}</span>
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
        {authority.map((item: List) => (
          <p key={item.id} className="mt-2">
            {" "}
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => {
                setAuthorities((prevAuth) =>
                  prevAuth.map((list: List) =>
                    list.id === item.id
                      ? { ...list, status: !list.status }
                      : list
                  )
                );
                if (item.status === false) {
                  addAuthority(item.numbers);
                } else {
                    removeAuth(item.numbers);
                }
                handleRequests();
              }}
            />{" "}
            <span>{item.name}</span>
          </p>
        ))}
      </div>
      <button
        onClick={clearFilters}
        className="mt-5 text-primary border border-primary font-sm p-2 rounded-lg "
      >
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
