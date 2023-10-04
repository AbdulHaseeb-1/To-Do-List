import React, { useState } from "react";
import "../App.css";
import { useDisclosure } from "@nextui-org/react";
import { AuthNavigationBar, GuestNavigationBar } from "../Components/Navbars";
import TaskBox from "../Components/TaskBox";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@nextui-org/react";
import NewTask from "../Components/NewTaskModal";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";

export default function TaskPage() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [IsAuth, setAuth] = useState(false);
  const { Theme } = AllThemes();

  return (
    <>
      {IsAuth ? <AuthNavigationBar /> : <GuestNavigationBar />}
      <div className={`${Theme.Background} w-full`}>
        <div
          className={` ${Theme.Background} p-2 md:p-4 h-[100vh] max-w-[1200px] m-auto`}
        >
          <div className="relative max-h-[90vh] ">
            <Tabs
              fullWidth
              aria-label="Options"
              color="success"
              variant="underlined"
              classNames={{
                tabList:
                  "text-black /gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-green-500",
                // tab: "max-w-fit px-0 h-12",
                tabContent: "  group-data-[selected=true]:text-white",
              }}
            >
              <Tab
                key="All"
                title={
                  <div className={`flex items-center space-x-2 ${Theme.Text} `}>
                    {/* <GalleryIcon/> */}
                    <span>All</span>
                    <Chip size="sm" variant="flat" color="success">
                      2
                    </Chip>
                  </div>
                }
              >
                <div
                  className={`transition min-h-[90px] ${Theme.Background} p-3 w-auto rounded-md h-full overflow-auto max-h-[89vh]`}
                >
                  <div className="overflow-hidden ">
                    <TaskBox
                      task={"Meating with Mr. X on secret Project"}
                      time={"Monday, June 10 2024"}
                      status={"bg-red-500"}
                    />

                    <TaskBox
                      task={"Meating with Mr. X on secret Project"}
                      time={"Monday, June 10 2024"}
                      status={"bg-red-500"}
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                key="Personal"
                title={
                  <div className={`flex items-center space-x-2 ${Theme.Text} `}>
                    {/* <GalleryIcon/> */}
                    <span>Personal</span>
                    <Chip size="sm" variant="flat" color="success">
                      1
                    </Chip>
                  </div>
                }
              >
                <div
                  className={`transition min-h-[90px] ${Theme.Background} p-3 w-auto rounded-md h-full overflow-auto max-h-[89vh]`}
                >
                  <div className="overflow-hidden ">
                    <TaskBox
                      task={"Meating with Mr. X on secret Project"}
                      time={"Monday, June 10 2024"}
                      status={"bg-red-500"}
                    />

       
                  </div>
                </div>
              </Tab>
              <Tab
                key="Work"
                title={
                  <div className={`flex items-center space-x-2 ${Theme.Text} `}>
                    {/* <GalleryIcon/> */}
                    <span>Work</span>
                    <Chip size="sm" variant="flat" color="success">
                      1
                    </Chip>
                  </div>
                }
              >
                <div
                  className={`transition min-h-[90px] ${Theme.Background} p-3 w-auto rounded-md h-full overflow-auto max-h-[89vh]`}
                >
                  <div className="overflow-hidden ">
                    <TaskBox
                      task={"Meating with Mr. X on secret Project"}
                      time={"Monday, June 10 2024"}
                      status={"bg-red-500"}
                    />

       
                  </div>
                </div>
              </Tab>
            </Tabs>

            {/* <h1 className="text-green-500 p-1 ">Task Manager</h1> */}

            <Button
              variant="shadow"
              isIconOnly
              size="lg"
              radius="full"
              className="absolute right-8 bottom-5 z-20"
              color="success"
              onPress={onOpen}
            >
              <AddIcon />
            </Button>
            <NewTask isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
