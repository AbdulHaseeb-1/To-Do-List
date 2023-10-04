import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";


export default function LoginModal({isOpen,onClose}) {
 const {Theme} = AllThemes()
  return (
    <>
       <Modal isOpen={isOpen} onOpenChange={onClose} placement="  center" backdrop="blur" className={`${Theme.Background} ${Theme.Text}`} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input    
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between ">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                    color="success"   
                  >
                   <p className={`${Theme.Text}`}> Remember me   </p> 
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
