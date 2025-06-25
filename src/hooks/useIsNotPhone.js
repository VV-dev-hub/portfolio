import { useEffect, useState } from "react";

export default function useIsNotPhone(breakpoint) {
  const [isNotPhone, setisNotPhone] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setisNotPhone(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isNotPhone;
}