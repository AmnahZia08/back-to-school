import { useState } from "react";
import { useRouter } from "next/router";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

type Props = {
  isOpen: false;
};

const Home: React.FC<Props> = ({ isOpen: initialOpen }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const onModalAction = () => {
    router.push("/back-to-school");
  };

  return (
    <div className="w-screen h-dvh bg-doodle">
      {/* blur the background when the modal is opened */}
      <div
        className={`w-screen h-dvh ${
          isOpen ? "backdrop-blur-[2px]" : ""
        } flex justify-center items-center`}
      >
        {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={handleCloseModal}
            onAction={onModalAction}
          />
        )}
        {!isOpen && (
          <Button className="mx-8" onClick={handleOpenModal}>
            Are you ready to get back to school? Click here
          </Button>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { isOpen: false } };
}

export default Home;
