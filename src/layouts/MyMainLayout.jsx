import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Pages/NavBAr/NavBar";
import Footers from "../Pages/Footer/Footers";
import Spiner from "../Components/Spiner";

function MyMainLayout() {
  const navigation = useNavigation();
  let isLoading = navigation.state === "loading";

  return (
    <div className="">
      <NavBar></NavBar>
      <section className="container min-h-screen mx-auto">
        {isLoading ? <Spiner></Spiner> : <Outlet></Outlet>}
      </section>
      <Footers></Footers>
    </div>
  );
}

export default MyMainLayout;
