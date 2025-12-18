import { useRef, useEffect } from "react";

const useOutsideClick = (callback: () => void, isOpen: boolean) => {
  const outSideClickRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        outSideClickRef.current &&
        !outSideClickRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        callback();
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [outSideClickRef, callback, isOpen]);
  return outSideClickRef;
};

export default useOutsideClick;
