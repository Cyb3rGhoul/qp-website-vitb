import "./Tailwind/tailwind.css";

export default function App() {
  return (
    <>
    <div className="mt-20 flex flex-col items-center">
      <span className="text-center font-bold text-5xl text-red-500">Question Papers</span>
      <span className="mt-10 text-xs text-gray-500">⚠️Note: You can submit question paper by using below link!</span>
      <p className="text-xs text-gray-500">🔍 Press <span className="font-bold text-black">(Ctrl + F)</span> and enter the subject code you looking.</p>
      
      <button className="mt-2 text-base bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg drop-shadow-lg" onClick={() => (window.location.href = "https://forms.gle/ckkPitjtGrA5yXrp7")}>Submit Paper</button>
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-red-500 text-2xl sm:text-3xl">CSE1021</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-blue-500 text-2xl sm:text-3xl">CSA2001</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-yellow-500 text-2xl sm:text-3xl">CHY1004</a>
        
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-purple-500 text-2xl sm:text-3xl">CHY1006</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-orange-500 text-2xl sm:text-3xl">EEE1001</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">ECE2002</a>
        
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-red-500 text-2xl sm:text-3xl">ENG1004</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-blue-500 text-2xl sm:text-3xl">HUM2001</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-yellow-500 text-2xl sm:text-3xl">MGT1002</a>
        
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-purple-500 text-2xl sm:text-3xl">MGT2003</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-orange-500 text-2xl sm:text-3xl">PHY1001</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT1001</a>
        
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-red-500 text-2xl sm:text-3xl">MAT1031</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-blue-500 text-2xl sm:text-3xl">MAT2001</a>
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-yellow-500 text-2xl sm:text-3xl">MAT2003</a>
        </div>
        <div className="mt-10 flex justify-around">
        <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-purple-500 text-2xl sm:text-3xl">CHY1005</a>
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-orange-500 text-2xl sm:text-3xl">MAT2001</a> */}
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT2003</a> */}
        </div>
      <div className="flex flex-col items-center sm:flex-row bg-red-500 mt-10 sm:justify-around">
  <div className="mt-10 mb-10">
    <p className="text-lg text-white underline font-bold">Important Links</p>
<p className="text-white text-center text-sm sm:text-base"><a href=".." className="text-white hover:font-semibold">Contact Us</a></p>
</div>
 <div className="mt-2 sm:mt-10 mb-10">
<span className="rounded-lg bg-white p-2 bg-opacity-40 items-center">Made by Aditya and Abhishek!</span>
</div>
</div>
    </>
  );
}



