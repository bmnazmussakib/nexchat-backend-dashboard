import DashboardCardItems from "./components/DashboardCardItems";
import DashboardHero from "./components/DashboardHero";

export default function Home() {

  return (
    <>
      <DashboardHero />
      <DashboardCardItems />

      <div className="grid md:grid-cols-2 gap-4 section-padding">
        <div className="card bg-white shadow-sm rounded-3xl overflow-hidden">
          <div className="card-header w-full flex justify-between items-center p-6 bg-white">
            <h4 className="font-grandis font-medium lg:text-xl md:text-lg text-base">Daily Messages</h4>
            <div className="flex items-center font-grandis md:text-base text-sm ">
              <span className="block w-16 font-normal ">Sort by</span>
              <select defaultValue="Pick a font" className="select select-ghost font-medium w-24 outline-0 font-grandis  ">
                <option className="">Daily</option>
                <option className="">Weekly</option>
                <option className="">Monhly</option>
              </select>
            </div>
          </div>
          <figure>
            <img
              src="/assets/images/chart-card-4.png"
              alt="Shoes"
              className="w-full object-cover"
              />
          </figure>
        </div>
        <div className="card bg-white shadow-sm rounded-3xl overflow-hidden">
          <div className="card-header w-full flex justify-between items-center p-6 bg-white">
            <h4 className="font-grandis font-medium lg:text-xl md:text-lg text-base">Daily Messages</h4>
            <div className="flex items-center font-grandis md:text-base text-sm ">
              <span className="block w-16 font-normal">Sort by</span>
              <select defaultValue="Pick a font" className="select select-ghost font-medium w-24 outline-0 font-grandis ">
                <option className="">Daily</option>
                <option className="">Weekly</option>
                <option className="">Monhly</option>
              </select>
            </div>
          </div>
          <figure>
            <img
              src="/assets/images/chart-card-1.png"
              alt="Shoes"
              className="w-full object-cover"
              />
          </figure>
        </div>
      </div>

    </>
  );
}
