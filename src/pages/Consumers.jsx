import React from "react";
import ConsumerCount from "../Components/consumerComponetns/ConsumerCount";
import HighestRevenueEarned from "../Components/consumerComponetns/HighestRevenueEarned";
import TotalEarnings from "../Components/consumerComponetns/TotalEarnings";
import OverallCash from "../Components/consumerComponetns/OverallCash";
import OverallFloat from "../Components/consumerComponetns/OverallFloat";
import OverallBullion from "../Components/consumerComponetns/OverallBullion";
import ConsumerAnalysis from "../Components/consumerComponetns/ConsumerAnalysis";
import GreatestTransection from "../Components/consumerComponetns/GreatestTransection";

const Consumers = () => {
  return (
    <div className=" p-6">
      <p className="text-gray-800  font-semibold">
        Consumers Overview
      </p>
      <section className="flex gap-2">
        <div className="flex flex-col gap-2">
          <ConsumerCount />
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <TotalEarnings />
              <OverallCash />
            </div>
            <div className="flex flex-col gap-2">
              <OverallFloat />
              <OverallBullion />
            </div>
          </div>
          <ConsumerAnalysis />
        </div>
        <div className="flex flex-col gap-2">
          <HighestRevenueEarned />
          <GreatestTransection />
        </div>
      </section>
    </div>
  );
};

export default Consumers;
