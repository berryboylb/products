import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterBysearch } from "../../actions/products";
import { Query } from "../Products";
type Props = {
  filterBysearch: any;
};
const SearchFilter: React.FC<Props> = ({ filterBysearch }) => {
  const [text, setText] = useState<string>("");
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const queryParams: Query = {
      page: 1,
      pageSize: 36,
      searchText: text,
      productCategoryTypeIds: [],
      complianceTypeIds: [],
      sourceTypeIds: [],
    };
    filterBysearch(queryParams);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between my-2 md:my-5"
    >
      <button
        type="submit"
        className=" w-[40px] sm:w-[20%] h-[40px] bg-primary text-[#fff] text-base rounded-l-lg"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        placeholder="Search Products"
        className="h-[40px] w-[90%] sm:w-[80%] bg-background font-sora pl-2 outline-none rounded-r-lg  focus:h-[50px] focus:border-2 focus:border-[skyblue] "
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
    </form>
  );
};

SearchFilter.propTypes = {
  filterBysearch: PropTypes.func.isRequired,
};

export default connect(null, { filterBysearch })(SearchFilter);
