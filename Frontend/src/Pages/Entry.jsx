import { Button } from "@nextui-org/react";
import React from "react";
import { ClipboardCheck } from 'lucide-react'
import LoginModal from "../Components/LoginModal";
import { useDisclosure } from "@nextui-org/react";
import SignUpModal from "../Components/SignUpModal";


export default function Entry() {
  const { onOpen: onOpenLogin , isOpen: isOpenLogin, onClose: onCloseLogin } = useDisclosure();
  const { onOpen: onOpenSignUp, isOpen: isOpenSignUp, onClose: onCloseSignUp } = useDisclosure();

  return (
    <div className="grid sm:grid-cols-2">
      <div className="hidden sm:grid place-content-center h-[100vh] text-green-500">
        <div className="flex gap-3 items-center">
          <ClipboardCheck size={100} />
          <h1 className="text-gray-200 text-2xl">Take Control on your day</h1>
      
        </div>
      </div>
      <div className="grid place-content-center h-[100vh] text-gray-200">
        <div className="flex items-end">
          <Button variant="ghost" color='success' onPress={onOpenLogin}>Log in</Button>
          <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} />

          <h1 className="text-6xl">|</h1>

          <Button variant="ghost" color='success' onPress={onOpenSignUp}>Sign up</Button>
          <SignUpModal isOpen={isOpenSignUp} onClose={onCloseSignUp} />
        </div>
      </div>
    </div>
  );
}
