import ErrorImage from "../assets/Error.jpg";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col xs:flex-row  items-center gap-12">
        <img src={ErrorImage} alt="Error" className="w-96 h-96 " />
        <p className="text-xl">404 Page not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
