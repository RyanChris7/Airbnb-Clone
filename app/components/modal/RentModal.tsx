"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      title="Airbnb Your Home"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
