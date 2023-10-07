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
} from "@nextui-org/react";
import { AllThemes } from "../Contexts/ThemeContext";

export default function SignUpModal({ isOpen, onClose }) {
  const {Theme} = AllThemes() ;
  // const {onSubmit} = AuthContext();
  const [userdata,setuserdata] = useState({username:"",email:"",password:"",confirm:""})

  // function HandleSubmit() {
  //  console.log(userdata);
  // }


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
            {/* <form method="post" onSubmit={HandleSubmit}> */}
              <ModalHeader className="flex flex-col gap-1">
                Create a new account
              </ModalHeader>
              <ModalBody>
            
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                  name="name"
                  onChange={(e)=>{setuserdata(...userdata,username=e.target.value)}}
                />
                <Input
                  // autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  name="email"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  name="password"
                />
                <Input
                  label="Confirm password"
                  placeholder="Reenter password"
                  type="password"
                  variant="bordered"
                  name="confirm"
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
                <Button color="success"  type="submit"> 
                  Sign Up
                </Button>
               
              </ModalFooter>
          {/* </form> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
