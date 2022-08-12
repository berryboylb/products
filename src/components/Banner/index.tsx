import Content from "../Content";
import Filter from "../Filter";

const Index = () => {
  
  return (
    <section className="py-[5rem] md:py-[2rem] w-full">
      <div className="my-container">
        <div className="flex justify-between md:flex-col">
          <div className="w-[30%] md:w-full">
            {<Filter />}
          </div>
          <div className="w-[65%] md:w-full">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
