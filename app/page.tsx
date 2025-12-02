import DashboardCardItems from "./components/DashboardCardItems";
import DashboardHero from "./components/DashboardHero";

export default function Home() {

  return (
    <>
      <DashboardHero />
      <DashboardCardItems />

      <div className="grid md:grid-cols-2 gap-4 section-padding">
        <div className="card bg-base-100 shadow-sm rounded-3xl">
          <div className="card-header w-full flex justify-between items-center p-6">
            <h4 className="font-grandis font-medium md:text-xl text-lg">Daily Messages</h4>
            <div className="flex items-center font-grandis text-sm ">
              <span className="block w-35 font-normal">Sort by</span>
              <select defaultValue="Pick a font" className="select select-ghost font-medium">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monhly</option>
              </select>
            </div>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">

          </div>
        </div>
      </div>
    </>
  );
}
