import { Triangle } from "react-loader-spinner";
function Spiner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Triangle
        height="300"
        width="300"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spiner;
