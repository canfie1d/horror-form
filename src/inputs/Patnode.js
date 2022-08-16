import { useState } from "react"
import ReactModal from 'react-modal';

const PatnodeInput = ({label, name}) => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return(
    <div>
      <div>
        <label htmlFor="location">{label}</label>
        <input onChange={handleOpenModal} type="text" id="location" name={name} />
      </div>
      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="patnode-message">
          <h1>
            gReAt JoB yOu MaDe A cHaNgE :D
          </h1>
        </div>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}

export default PatnodeInput;
