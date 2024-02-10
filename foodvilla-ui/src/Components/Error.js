import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log("🚀 ~ Error ~ error:", error)
  return (
    <div>
      <h1>Ooops!!</h1>
      <h3>Something went wrong!!</h3>
      <h2>{`${error?.status} : ${error?.statusText}`}</h2>
      <p>{`Error: ${error.error?.message}`}</p>
    </div>
  );
};

export default Error;
