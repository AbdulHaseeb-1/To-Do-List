import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Link,
  user,
} from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";
import { Auth } from "../Contexts/AuthContext";

export default function SignUpModal({ isOpen, onClose }) {
  const { Theme } = AllThemes();
  // const [InValid,setInValid] = useState(false)
  const {HandleSubmit} = Auth();
  const [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  function HandleSubmitForm(e) {
    e.preventDefault();
    HandleSubmit(userdata)
  }

  function HandleChange(e) {
    const {name,value} = e.target
      setuserdata({...userdata,[name]:value})
  }



  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        placement="center"
        backdrop="blur"
        className={`${Theme.Text} ${Theme.Background}`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={HandleSubmitForm}>
                <ModalHeader className="flex flex-col gap-1">
                  Create a new account
                </ModalHeader>
                <ModalBody>
                  <Input
                 
                    id="name"
                    autoFocus
                    label="Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                    name="username"
                    onChange={HandleChange}
                />
                  <Input
                   
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    name="email"
                    onChange={HandleChange}
                    
                  />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    name="password"
                    onChange={HandleChange}
                    // isInvalid = {InValid}
                    // errorMessage= { InValid && "The password length must be atleast 6 digits"}
                   
                  />
                  <Input
                    label="Confirm password"
                    placeholder="Reenter password"
                    type="password"
                    variant="bordered"
                    name="confirm"
                    onChange={HandleChange}
                  />
                  <div className="flex py-2 px-1 justify-between ">
                    <Link color="primary" href="#" size="sm">
                      Already have an account?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="success" type="submit">
                    Sign Up
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
