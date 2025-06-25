import { useRef, useEffect, useState } from "react";

export default function useHeaderOffset() {
  const headerRef = useRef(null);
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    const updateOffset = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setOffset(rect.height);
      }
    };

    updateOffset(); // Appel initial
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return [headerRef, offset];
}