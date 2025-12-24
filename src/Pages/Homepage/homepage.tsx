import Map from "../map/map";

export const Homepage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-2 sm:p-4 md:p-10 flex justify-center items-start">
      <div className="w-full max-w-[1400px] bg-white rounded-xl md:rounded-2xl shadow-xl p-2 sm:p-4 md:p-6">
        <Map />
      </div>
    </main>
  );
};