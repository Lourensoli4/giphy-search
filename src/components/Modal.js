const Modal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div
          className="absolute flex items-center justify-center w-full h-full px-2 text-white"
          onClick={() => close()}
        >
          <div
            className="flex flex-col p-2 bg-blue-500 rounded-md w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <h2 className="mb-4 text-xl">Giphy Search Engine Information</h2>
            </div>
            <div className="space-y-2 text-center">
              <p>
                The Giphy Search Engine will display a maximum of 10 results.
              </p>
              <p>
                Contact the developer at
                <a href="mailto:lourensoli4@gmail.com">
                  {" "}
                  Lourensoli4@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
