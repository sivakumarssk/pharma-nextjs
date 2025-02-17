"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

interface MainBannerProps {
  data: {
    day2?: {
      dayDate: string;
      list: {
        head: string;
        date: string;
        _id: string;
      }[];
    };
  };
}

const SecondDay: React.FC<MainBannerProps> = ({ data }) => {
  const arrayData = data?.day2?.list || [];

  return (
    <div>
      <Accordion>
        {arrayData.map((item) => (
          <AccordionItem key={item?._id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="schedule-info">
                  <h3>{item?.head}</h3>
                  <ul>
                    <li>
                      <i className="icofont-wall-clock"></i> {item?.date}
                    </li>
                  </ul>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            {/* <AccordionItemPanel>
                  <p>Details for {item.head} can go here.</p>
                </AccordionItemPanel> */}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SecondDay;
