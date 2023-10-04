"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Subject from "./components/Table";
import MainLayouts from "./layouts/MainLayouts";

export default function Home() {
  const [changeState, setChangeState] = useState<boolean>(true);

  const handleChangeState = (value: boolean) => {
    return setChangeState(value);
  };
  usePreventZoom();
  return (
    <div>
      <MainLayouts
        handleChangeState={handleChangeState}
        changeState={changeState}
      >
        <Hero changeState={changeState} />
        <Subject changeState={changeState} />
      </MainLayouts>
    </div>
  );
}

export function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (
        keyboardCheck &&
        e.ctrlKey &&
        (e.keyCode == "61" ||
          e.keyCode == "107" ||
          e.keyCode == "173" ||
          e.keyCode == "109" ||
          e.keyCode == "187" ||
          e.keyCode == "189")
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: any) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCheck, keyboardCheck]);
}
