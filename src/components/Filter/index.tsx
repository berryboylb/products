import SearchFilter from "./SearchFilter";
import CheckFilter from "./CheckFilter";
import { useMediaQuery } from "react-responsive";
const Index = () => {
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <div className="w-full">
      <h2 className="font-seconadry font-normal text-base md:text-sm  my-5 md:my-3">
        front page /{" "}
        <span className="font-medium hover:font-semibold">
          See dangerous and defective products
        </span>
      </h2>
      {isMobile ? (
        ""
      ) : (
        <div>
          <SearchFilter />
          <CheckFilter />
        </div>
      )}
      
    </div>
  );
};

export default Index;
