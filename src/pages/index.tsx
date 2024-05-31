import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

type Props = {
  isOpen: false;
};

const Home: React.FC<Props> = ({ isOpen: initialOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="w-screen h-screen bg-doodle flex justify-center items-center">
      {isOpen && <Modal isOpen={isOpen} onClose={handleCloseModal} />}
      <Button onClick={handleOpenModal}>Click here for some magic</Button>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { isOpen: false } };
}

export default Home;
