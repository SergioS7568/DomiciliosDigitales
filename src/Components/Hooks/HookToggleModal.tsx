import { useState } from "react";

export default function HookToggleModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, toggleModal };
}
