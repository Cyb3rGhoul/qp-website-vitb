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

        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-red-500">CSE1021</h5>
            <p className="card-text">Introduction to Problem Solving</p>
            <a href="https://drive.google.com/drive/folders/1YwF9gxz6Wq1t2B14_jLM0FtvPlqvA1OzNMPAqcap5x1P8aD0tPV2AB_6trAQpoC4JdV5B0Et?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body text-blue-500">
            <h5 className="card-title">CSA2001</h5>
            <p className="card-text">Fundamentals of Airtificial Inteligence and Machine Learning</p>
            <a href="https://drive.google.com/drive/folders/1KVqDch2p1HWVAtuDN1X4D6kK8e4HH7v6zGHfTj2ogKeo9-OWFAdU9wK7pfRiyQzHpNxRMD0P?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-yellow-500">CHY1004</h5>
            <p className="card-text">Forensic Chemistry</p>
            <a href="https://drive.google.com/drive/folders/17NVnBj5PNUQqBObXNR01HalTXtjwKf6u2GgHTAgv-l2Ef1xG2YrmkxTP9MeP0Wque5mWyGaZ?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex justify-around">

      <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-purple-500">CHY1006</h5>
            <p className="card-text">Environmental Sustainabilty</p>
            <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-orange-500">EEE1001</h5>
            <p className="card-text">Electric Circuits and System</p>
            <a href="https://drive.google.com/drive/folders/1GM-ZYC-T9-OHBLi28ztvfow0Sa7KDwaT1YU5WJyOantCu2RebsUyTpL5cA5vEB6O1SftXuOb?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-green-500">ECE2002</h5>
            <p className="card-text">Digital Logic Design</p>
            <a href="https://drive.google.com/drive/folders/1ZWNdgSOAFZ0phVX69vnH_VGb03YJuK68_jokiEpM-VKzOnn9Iez9t_D-QbBtEpu8YAdpxcyi?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>        

      </div>
      <div className="mt-10 flex justify-around">

      <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-red-500">ENG1004</h5>
            <p className="card-text">Effective Techinal Communication</p>
            <a href="https://drive.google.com/drive/folders/1NoAiy-O-M-XcTdRg0mh4RiEk_HKTUVNR6gNek-rrke7N0aPT-BmsLkY39pj20KE4upZDsOFQ?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-blue-500">HUM2001</h5>
            <p className="card-text">Behavioural Science</p>
            <a href="https://drive.google.com/drive/folders/14qUJV70KwCcfZsSibdaVzRj746mRRabBiOJXq6ZgPawxD5zqF0u5Sw6oFiQomIKvhvBFFz1T?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-yellow-500">MGT1002</h5>
            <p className="card-text">Principles of Management and Organizational Behaviour</p>
            <a href="https://drive.google.com/drive/folders/1LFpGDrcwKzbiGGiOCIhZsQD4vMqtCxAJyC3ut8PIG7oRIBHLepE6C4Q3z287-o2ZXS9j3e1z?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>    

      </div>
      <div className="mt-10 flex justify-around">

      <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-purple-500">MGT2003</h5>
            <p className="card-text">Technology Entrepreneurship</p>
            <a href="https://drive.google.com/drive/folders/1VPyOG8NjlteHNrhAAe_rgBK9P-dbcLJUyjrY9WCBMOYSns8BLtPIhPbZ23W0aGCBLnXrQ1K3?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-orange-500">PHY1001</h5>
            <p className="card-text">Engineering Physics</p>
            <a href="https://drive.google.com/drive/folders/1qplvvsCmrBhJfm3sg6B82QDpe0UFWTlsmD4CGupER_TEjLTGhx2nBR4WjufJbr7f-JuuDx_t?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-green-500">MAT1001</h5>
            <p className="card-text">Calculus and Laplace Transforms</p>
            <a href="https://drive.google.com/drive/folders/1Mr_aoHYnFqOD-LRx3MZgA2ne3pVZ231mI-W9Vl1P7N0PSTJnIV6ZZFa0BTBQmQftSN7pWAG7?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div> 

      </div>
      <div className="mt-10 flex justify-around">

      <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-red-500">MAT1031</h5>
            <p className="card-text">Introduction to calculus</p>
            <a href="https://drive.google.com/drive/folders/1tkvghNqIS4x-6h8dsqnye9JNEkoIr0YST0U6YPycB7xoNAn1-7wfVOj9fUkXOMkpTvueFZ0-?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-blue-500">MAT2001</h5>
            <p className="card-text">Differential And Difference Equations</p>
            <a href="https://drive.google.com/drive/folders/1jgnm1fZ37sHlJVajc-Rx0mWCGWShuipljeUqfk8vEwbcGl_Tq2q8tr77vfgzRdIZD58stAD1?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-yellow-500">MAT2003</h5>
            <p className="card-text">Applied Numerical methods</p>
            <a href="https://drive.google.com/drive/folders/1SJjLi4sKWU8rXmWufdCu-j1erCC8ZrbRsv34IqEzmY2eZIJGiu56BkEflNcb5OeG-fmNVqCo?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>

      </div>

      <div className="mt-10 flex justify-around">

      <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-purple-500">CHY1005</h5>
            <p className="card-text">Introduction to Computational chemistry</p>
            <a href="https://drive.google.com/drive/folders/1oahyPYhgi1xt3XBvXAFSmWMsf66fmcb-fqlWnQVWpzXYbpb9UTOxcKkzqCbzuqiPduxyXTLH?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
      
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-orange-500">CHY1007</h5>
            <p className="card-text">Forensic Chemistry and Applications</p>
            <a href="https://drive.google.com/drive/folders/12VJY3HExx2bqxuPY2YJJKT4JgUMDJNcDwNix1r4uhozcLzBf8C_jslmCuEafO82_8MyCFJOM?usp=share_link" className="card-link font-bold text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
            
        <div className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title text-green-500">ENG2005</h5>
            <p className="card-text">Advanced Technical Communication</p>
            <a href="https://drive.google.com/drive/folders/1SJjLi4sKWU8rXmWufdCu-j1erCC8ZrbRsv34IqEzmY2eZIJGiu56BkEflNcb5OeG-fmNVqCo?usp=share_link" className="card-link font-bold  text-2xl sm:text-3xl">Paper Link</a>
          </div>
        </div>
        
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-orange-500 text-2xl sm:text-3xl">MAT2001</a> */}
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT2003</a> */}
        {/* <a href="https://drive.google.com/drive/folders/1SIipwMXcr69hmmBAtBHnBw-2p5zRyeDUdVLkg-M-MSo6mXEfD8JSCiOJrqlnXoQc5TAEtc40?usp=share_link" className="font-bold text-green-500 text-2xl sm:text-3xl">MAT2003</a> */}
      </div>
      <div className="flex flex-col items-center sm:flex-row bg-red-500 mt-10 sm:justify-around">
        <div className="mt-10 mb-10">
          <p className="text-lg text-white underline font-bold">Important Links</p>
          <p className="text-white text-center text-sm sm:text-base"><a href=".." className="text-white hover:font-semibold">Contact Us</a></p>
        </div>
        <div className="mt-2 sm:mt-10 mb-10">
          <span className="rounded-lg bg-white p-2 bg-opacity-40 items-center">Made by Aditya Abhishek and Harsh!</span>
        </div>
      </div>
    </>
  );
}



