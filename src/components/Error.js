import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Unauthorized URL</h1>
      <h2>{error.data}</h2>
      <h2>{`${error.status} : ${error.statusText}`}</h2>
    </div>
  );
};

export default Error;
