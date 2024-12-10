import { useState } from "react";

export default function useHookToggleModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, toggleModal };
}
