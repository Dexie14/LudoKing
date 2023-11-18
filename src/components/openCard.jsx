import shield from  "./../assets/shield.svg"


const openCard = () => {
  return (
    <div className="bg-white px-1 py-1 h-[160px] rounded-xl w-[280px] mb-3">

        <div className="ml-3 ">
        <p className=" text-[#0F002B] font-normal italic">open challenge from <span className="font-bold not-italic ">ravan3p</span></p>
        <p className="font-bold italic ">· <span className="font-normal">2 minutes ago</span></p>
        </div>


        <div className="bg-[#FCA837] flex justify-between items-center px-6 py-3 mt-5 rounded-b-xl" >
        <section>
            <div className="flex gap-5 mb-3">
                <p className=" text-white font-normal w-10/12">Entry fee</p>
                <h4 className="text-white font-extrabold">₹40</h4>
            </div>
            <div className="flex gap-5">
                <p className="text-white font-normal w-10/12">Prize</p>
                <h4 className="text-white font-extrabold">₹80</h4>
            </div>
        </section>
        <section >
            <img  src={shield} alt="shield" style={{boxShadow: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"}}/>
        </section>
        </div>
    </div>
  )
}

export default openCard