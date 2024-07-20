import React from "react";
import Button from "./(components)/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const sucess = () => {
    toast("This is a success message");
  };
  const fail = () => {
    toast("This is a fail message");
  };
  return (
    <div>
      Hi
      <div>
        <Button name="Sucess" click={sucess} />
        <Button name="Reject" click={fail} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
