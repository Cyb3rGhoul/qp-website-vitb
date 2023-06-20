import "./Tailwind/tailwind.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>

      <div className="mt-20 flex flex-col items-center">
        <span className="headingg text-center font-bold text-5xl text-red-500" data-aos="fade-in">Question Papers</span>
        <span className="headingg text-center mt-10 text-sm text-gray-400" data-aos="fade-in">⚠️ Note: You can submit question paper by using below link!</span>
        <p className="text-sm text-center text-gray-400" data-aos="fade-in">🔍 Press <span className="font-bold text-white">(Ctrl + F)</span> and enter the subject code you looking.</p>

        <button className="mt-2 text-base bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg drop-shadow-lg" onClick={() => (window.location.href = "https://forms.gle/ckkPitjtGrA5yXrp7")}>Submit Paper</button>
      </div>
      <div className="boxess mt-10 flex justify-around">

        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">CSE1021</h5>
            <p class="card-text text-white">Introduction to Problem Solving</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1YwF9gxz6Wq1t2B14_jLM0FtvPlqvA1OzNMPAqcap5x1P8aD0tPV2AB_6trAQpoC4JdV5B0Et?usp=share_link" class="no-underline text-white">Paper Link</a></button>

          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">CSA2001</h5>
            <p class="card-text text-white">Fundatmentals of AI & ML</p>
            <a href="https://drive.google.com/drive/folders/1KVqDch2p1HWVAtuDN1X4D6kK8e4HH7v6zGHfTj2ogKeo9-OWFAdU9wK7pfRiyQzHpNxRMD0P?usp=share_link" class="no-underline text-white"><button type="button" class="btn btn-info w-full">Paper Link</button></a>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">CHY1004</h5>
            <p class="card-text text-white">Forensic Chemistry</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/17NVnBj5PNUQqBObXNR01HalTXtjwKf6u2GgHTAgv-l2Ef1xG2YrmkxTP9MeP0Wque5mWyGaZ?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>

      </div>

      <div className="boxess mt-10 flex justify-around">

        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">CHY1006</h5>
            <p class="card-text text-white">Environmental Sustainability</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">EEE1001</h5>
            <p class="card-text text-white">Electric Circuits and Systems</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1GM-ZYC-T9-OHBLi28ztvfow0Sa7KDwaT1YU5WJyOantCu2RebsUyTpL5cA5vEB6O1SftXuOb?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">ECE2002</h5>
            <p class="card-text text-white">Digital Logic Design</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1ZWNdgSOAFZ0phVX69vnH_VGb03YJuK68_jokiEpM-VKzOnn9Iez9t_D-QbBtEpu8YAdpxcyi?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>

      </div>
      <div className="boxess mt-10 flex justify-around">

      <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">ENG1004</h5>
            <p class="card-text text-white">Effective Teachnical Communication</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1NoAiy-O-M-XcTdRg0mh4RiEk_HKTUVNR6gNek-rrke7N0aPT-BmsLkY39pj20KE4upZDsOFQ?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">HUM2001</h5>
            <p class="card-text text-white">Behavioural Science</p>
            <button type="button" class="btn btn-info w-full"><a href="" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">MGT1002</h5>
            <p class="card-text text-white">Principles of Management and Organizational Behaviour</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/14qUJV70KwCcfZsSibdaVzRj746mRRabBiOJXq6ZgPawxD5zqF0u5Sw6oFiQomIKvhvBFFz1T?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>

      </div>
      <div className="boxess mt-10 flex justify-around">

      <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">MGT2003</h5>
            <p class="card-text text-white">Technology Entrepreneurship</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1VPyOG8NjlteHNrhAAe_rgBK9P-dbcLJUyjrY9WCBMOYSns8BLtPIhPbZ23W0aGCBLnXrQ1K3?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark"  data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">PHY1001</h5>
            <p class="card-text text-white">Engineering Physics</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1qplvvsCmrBhJfm3sg6B82QDpe0UFWTlsmD4CGupER_TEjLTGhx2nBR4WjufJbr7f-JuuDx_t?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">MAT1001</h5>
            <p class="card-text text-white">Calculus and Laplace Transforms</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1Mr_aoHYnFqOD-LRx3MZgA2ne3pVZ231mI-W9Vl1P7N0PSTJnIV6ZZFa0BTBQmQftSN7pWAG7?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>

      </div>
      <div className=" boxess mt-10 flex justify-around">

      <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">MAT1031</h5>
            <p class="card-text text-white">Introduction to calculus</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1tkvghNqIS4x-6h8dsqnye9JNEkoIr0YST0U6YPycB7xoNAn1-7wfVOj9fUkXOMkpTvueFZ0-?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">MAT2001</h5>
            <p class="card-text text-white">Differential And Difference Equations</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1jgnm1fZ37sHlJVajc-Rx0mWCGWShuipljeUqfk8vEwbcGl_Tq2q8tr77vfgzRdIZD58stAD1?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">MAT2003</h5>
            <p class="card-text text-white">Applied Numerical methods</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1SJjLi4sKWU8rXmWufdCu-j1erCC8ZrbRsv34IqEzmY2eZIJGiu56BkEflNcb5OeG-fmNVqCo?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
      </div>
      <div className="boxess mt-10 flex justify-around">

      <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-left">
          <div class="card-body">
            <h5 class="card-title text-white">CHY1005</h5>
            <p class="card-text text-white">Introduction to Computational chemistry</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/1oahyPYhgi1xt3XBvXAFSmWMsf66fmcb-fqlWnQVWpzXYbpb9UTOxcKkzqCbzuqiPduxyXTLH?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-down">
          <div class="card-body">
            <h5 class="card-title text-white">CHY1007</h5>
            <p class="card-text text-white">Forensic Chemistry and Applications</p>
            <button type="button" class="btn btn-info w-full"><a href="https://drive.google.com/drive/folders/12VJY3HExx2bqxuPY2YJJKT4JgUMDJNcDwNix1r4uhozcLzBf8C_jslmCuEafO82_8MyCFJOM?usp=share_link" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        <div class="card w-72 border-info border-3 mb-3 bg-dark" data-aos="fade-right">
          <div class="card-body">
            <h5 class="card-title text-white">ENG2005</h5>
            <p class="card-text text-white">Advanced Technical Communication</p>
            <button type="button" class="btn btn-info w-full"><a href="/" class="no-underline text-white">Paper Link</a></button>
          </div>
        </div>
        
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-orange-500 text-2xl sm:text-3xl">MAT2001</a> */}
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT2003</a> */}
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT2003</a> */}
      </div>
      <div className="flex flex-col items-center sm:flex-row bg-[#0c4a6e] mt-10 sm:justify-around">
        <div className="mt-10 mb-10">
          <p className="text-lg text-white underline font-bold">Important Links</p>
          <p className="text-white text-center text-sm sm:text-base"><a href="mailto:papersvitb@incel.email" className="text-white no-underline hover:font-semibold">Contact Us</a></p>
        </div>
        <div className="mt-2 sm:mt-10 mb-10">
          <span className="rounded-lg bg-white p-2 bg-opacity-40 items-center">Made by Aditya, Abhishek & Harsh!</span>
        </div>
      </div>
    </>
  );
}


