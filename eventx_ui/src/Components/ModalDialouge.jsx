const ModalDialouge = ({ isOpen, togglrModal }) => {
    return (
      <>
       {
       isOpen ?
  
        <div
          className="modalContainer"
          onClick={() => togglrModal()}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">Modal Title</h2>
              <button className="close" onClick={() => togglrModal()}>
                <img src="images/times-cross.svg" alt="close" />
              </button>
            </header>
            <main className="modal_content">This is modal content</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => togglrModal()}>
                Cancel
              </button>
  
              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalDialouge;