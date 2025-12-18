import { useGlobalContext } from "../hooks/useGlobalContext";

function ModalImage({ handleShowModal }) {
  const { user } = useGlobalContext();

  return (
    <div
      onClick={handleShowModal}
      className="absolute inset-0 bg-black/70 h-lvh z-30"
    >
      <div className="relative h-lvh z-50 flex justify-center items-center">
        <img
          src={user.photoURL}
          alt=""
          className="rounded-xl w-56 md:w-[500px]"
        />
      </div>
    </div>
  );
}

export default ModalImage;
