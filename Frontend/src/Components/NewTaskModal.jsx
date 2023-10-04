import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";

function NewTask({ isOpen, onClose }) {
const categories = [{id:1,value:""},{id:2,value:"Personal"},{id:3,value:"Work"},{id:4,value:"Wishlist"}]
const {Theme} = AllThemes()
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      backdrop="blur"
      className={`${Theme.Background} ${Theme.Text}`}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Task"
                placeholder="Enter new task here...."
                variant="underlined"
              />

<Select 
        label="Select an category" 
        variant="underlined"
        className={`${Theme.Text} max-w-xs `}
        classNames={{listbox:`${Theme.Text}` ,popover:`${Theme.Background} ${Theme.Text}`}}
      >
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.value}>
            {category.value}
          </SelectItem>
        ))}
      </Select>


              {/* <input type="datetime-local" className="bg-transparent " /> */}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="success" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default NewTask;
