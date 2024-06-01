import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";

type Props = {
  isOpen: false;
};

const Home: React.FC<Props> = ({ isOpen: initialOpen }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const onModalAction = () => {
    router.push("/BackToSchool");
  };

  return (
    <div className="w-screen h-screen bg-doodle flex justify-center items-center">
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
  );
};

export async function getServerSideProps() {
  return { props: { isOpen: false } };
}

export default Home;
