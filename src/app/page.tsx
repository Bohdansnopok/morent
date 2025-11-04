import Banner from "../components/banner/banner";
import HomeCarList from "../components/homeCarList/homeCarList";
import PickUp from "../components/pickUp/pickUp";

export default function Home() {
  return (
    <div>
      <Banner />
      <PickUp />
      <HomeCarList />
    </div>
  );
}
