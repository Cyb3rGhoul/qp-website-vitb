import "./Tailwind/tailwind.css";

export default function App() {
  return (
    <>
    <div className="mt-20 flex flex-col items-center">
      <span className="text-center font-bold text-5xl text-red-500">Question Paper's</span>
      <span className="mt-10 text-xs text-gray-500">⚠️Note: You can submit question paper by using below link!</span>
      <p className="text-xs text-gray-500">🔍 Press <span className="font-bold text-black">(Ctrl + F)</span> and enter the subject code you looking.</p>
      <button className="mt-2 text-base bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg drop-shadow-lg" onClick={() => (window.location.href = "https://forms.google.com")}>→ Submit Paper</button>
    </div>
      <div className="mt-20 flex flex-col items-center">
        <>
        <h className="font-bold text-2xl sm:text-3xl">CHY1006</h>
        <h className="font-bold text-xl text-gray-600">Environmental Sustainability</h>
        <div className="flex-row">
        <a href=".." className="p-1 mr-4 text-xs text-red-600 hover:bg-red-100 rounded-lg">Mid Term</a>
        <a href=".." className="p-1 text-xs text-red-600 hover:bg-red-100 rounded-lg">End Term</a>
        </div>
        </>
        <>
        <h className="mt-4 font-bold text-2xl sm:text-3xl">CSA2001</h>
        <h className="font-bold text-xl text-gray-600">Fundamentals of AI and ML</h>
        <div className="flex-row">
        <a href="https://mega.nz/folder/ltNnTAbI#k-ueAvwcPqUXc3n_PGmMWA" className="p-1 mr-4 text-xs text-red-600 hover:bg-red-100 rounded-lg">Mid Term</a>
        <a href="https://mega.nz/folder/ltNnTAbI#k-ueAvwcPqUXc3n_PGmMWA" className="p-1 text-xs text-red-600 hover:bg-red-100 rounded-lg">End Term</a>
        </div>
        </>
        <>
        <h className="mt-4 font-bold text-2xl sm:text-3xl">HUM2001</h>
        <h className="font-bold text-xl text-gray-600">Behavioral Science</h>
        <div className="flex-row">
        <a href=".." className="p-1 mr-4 text-xs text-red-600 hover:bg-red-100 rounded-lg">Mid Term</a>
        <a href=".." className="p-1 text-xs text-red-600 hover:bg-red-100 rounded-lg">End Term</a>
        </div>
        </>
        <>
        <h className="mt-4 font-bold text-2xl sm:text-3xl">CHY1005</h>
        <h className="font-bold text-xl text-gray-600">Behavioral Science</h>
        <div className="flex-row">
        <a href=".." className="p-1 mr-4 text-xs text-red-600 hover:bg-red-100 rounded-lg">Mid Term</a>
        <a href=".." className="p-1 text-xs text-red-600 hover:bg-red-100 rounded-lg">End Term</a>
        </div>
        </>
      </div>
      <div className="flex flex-col items-center sm:flex-row bg-red-500 mt-10 sm:justify-around">
  <div className="mt-10 mb-10">
    <p className="text-lg text-white underline font-bold">Important Links</p>
<p className="text-white text-center text-sm sm:text-base"><a href=".." className="text-white hover:font-semibold">Submit Paper</a></p>
<p className="text-white text-center text-sm sm:text-base"><a href=".." className="text-white hover:font-semibold">Report Issue</a></p>
</div>
 <div className="mt-2 sm:mt-10 mb-10">
<span className="rounded-lg bg-white p-2 bg-opacity-40 items-center">Made by <a href="https://papers-vitb.vercel.app" className="text-white font-semibold">Aditya</a> and <a href="https://papers-vitb.vercel.app" className="text-white font-semibold">Abhishek</a>!</span>

</div>
</div>
    </>
  );
}



