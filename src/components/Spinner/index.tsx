import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useMediaQuery } from "react-responsive";
const Index = () => {
  const [loading] = useState<boolean>(true);
  const [size, setSize] = useState<number>(30);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    if (isMobile) setSize(15);
  }, [isMobile]);
  return (
    <div className="flex justify-center items-center my-[2rem]">
      <MoonLoader color="#0041ff" loading={loading} size={size} />
    </div>
  );
};

export default Index;
