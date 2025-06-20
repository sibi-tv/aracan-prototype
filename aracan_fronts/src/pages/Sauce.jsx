// import Card from "../layout/Card"
import ImageLink from '../layout/ImageLink';

export default function Sauce() {
  return (
    <div className="container mb-30">
        <div className="mt-10 flex flex-col justify-center items-center gap-4">
            <div className = "w-full justify-evenly flex">
                <p className="w-full items-center flex justify-center text-center font-macherie text-5xl text-purple-950">Humble Beginnings Tee</p>
                <div className="w-full flex justify-center  bg-violet-400 shadow-purple-400 shadow-md">
                    <div>
                        <ImageLink src="/IMG_2050.JPG" />
                    </div>
                </div>
                <p className="w-full items-center flex justify-center text-center font-macherie text-5xl text-red-600">$25.00</p>
            </div>
            <div className = "w-full justify-evenly flex">
                <p className="w-full items-center flex justify-center text-center font-macherie text-5xl text-purple-950">Butterfly Tee</p>
                <div className="w-full flex justify-center  bg-violet-400 shadow-purple-400 shadow-md">
                    <div>
                        <ImageLink src="/IMG_3688.jpg" />
                    </div>
                </div>
                <p className="w-full items-center flex justify-center text-center font-macherie text-5xl text-red-600">$25.00</p>
            </div>
            
        </div>
    </div>
  )
}
