"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import useSound from "use-sound";

const TestComponent = () => {
  const [play, { stop, pause, duration, sound }] = useSound(null);

  useEffect(() => {
    console.log("TEST TEST TEST");
    console.log("play:", play);
    console.log("stop:", stop);
    console.log("pause:", pause);
    console.log("duration:", duration);
    console.log("sound:", sound);
  }, []);

  return <div>Hello</div>;
};

export default TestComponent;
