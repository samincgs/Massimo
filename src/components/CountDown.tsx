"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  return (
    <Countdown
      date={new Date("2023-10-25")}
      className="font-bold text-5xl text-yellow-300"
    />
  );
};

export default CountDown;
