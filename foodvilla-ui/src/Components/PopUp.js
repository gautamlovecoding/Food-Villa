import Modal from "react-modal";
// Set the app element for react-modal
Modal.setAppElement("#root");

const PopUp = ({ isShowPopup }) => {
  let { showPopup, setShowPopup, action } = isShowPopup;
  return (
    <Modal
      isOpen={showPopup}
      onRequestClose={() => setShowPopup(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
          overflow: "visible",
        },
      }}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 opacity-100">
        {/* Add your icon here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 w-12 text-green-500 ml-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="mt-2">{action}</p>
      </div>
    </Modal>
  );
};

export default PopUp;
