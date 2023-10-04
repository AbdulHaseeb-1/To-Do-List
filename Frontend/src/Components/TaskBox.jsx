import { DeleteIcon, EditIcon, TriangleDownIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";

export default function TaskBox({ task, time, status }) {
  const { Theme } = AllThemes();
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <div className={` transtion relative p-2 m-3 ${Theme.Background} ${Theme.Text} h-auto shadow-md ${Theme.Shadow} ${Theme.Hover}`}>
          <div className={`top-0 left-0 h-full w-0.5 ${status} absolute`}></div>
          <h6 className="font-bold ">{time}</h6>
          <p>{task}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-transparent ">
        <div>
          <Button
            color="warning"
            variant="shadow"
            className=" m-1 capitalize rounded-full"
            isIconOnly
          >
            <EditIcon />
          </Button>
          <Button
            variant="shadow"
            color="danger"
            className="capitalize m-1 rounded-full"
            isIconOnly
          >
            <DeleteIcon />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
