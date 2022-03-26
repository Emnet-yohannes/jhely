import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import image125 from "../public/images/image125.png"
import ellipse37 from "../public/images/Ellipse37.jpg"
import LeftSide from "../components/LeftSide/LeftSide";
import RightSide from "../components/RightSide/RightSide";
import Footer from "../public/images/image27.png"
import Statstics from "../public/images/statstics.png"
import optionIcon from "../public/images/optionIcon.png"
import tag from "../public/images/tag.png"
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black " >
        <Navbar />
        <div className=" backgroundGradient1" >
          <div className=" h-[400px] w-full relative flex flex-col items-center">
            <Image className="w-full" src={image125}/>
            <div className="hidden md:block absolute bottom-[15%]  w-[149px] h-[149px]">
              <Image  src={ellipse37} className="w-full rounded-full "/>
            </div>
          </div>

          
          <div className="text-center ">
            <h1 className="text-5xl font-extrabold text-white">
              Lorem Ipsum
            </h1>
            <div className="flex justify-center mt-[6px] h-[40px] ">
              <div className="w-[239px] flex">
                <h3 className=" text-base font-normal text-[#F3F3F3]">
                  created by:
                </h3>
                <h2 className=" text-base font-normal text-[#FC364C]">
                  Lorem Ipsum
                </h2>
              </div>

            </div>

            <h3 className="text-white h-[32px] ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </h3>
          </div>
          <div className="flex justify-center space-x-[20px] mt-[61px]">

            <div className="text-white bg-[#0D0D0D] opacity-50 flex justify-center rounded-sm w-[184px] h-[50px] items-center space-x-3">
              <div className="w-4 h-4">
                <Image src={Statstics} >

                </Image>
              </div>

              <h1>
                Lorem Ipsum

              </h1>
            </div>
            <div className="text-white bg-[#0D0D0D] flex justify-center rounded-sm w-[184px] h-[50px] items-center space-x-3">
              <div className="w-4 h-4">
                <Image src={optionIcon} >

                </Image>
              </div>

              <h1>
                Lorem Ipsum

              </h1>
            </div>
            <div className="text-white  bg-[#0D0D0D] opacity-50 flex justify-center rounded-sm w-[184px] h-[50px] items-center space-x-3">
              <div className="w-4 h-4">
                <Image src={tag} >

                </Image>
              </div>

              <h1>
                Lorem Ipsum

              </h1>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 gap-8 mt-[73px] xl:grid-cols-2">
              <div className=" text-white w-[340px]  md: w-[591px] h-[344px] ">
                <LeftSide />
              </div>
              <div className="text-white mb-[138px]  w-[340px] md:w-[591px] h-[438px]">
                <RightSide />
              </div>
            </div>
          </div>

        </div>
        <footer className="flex justify-center mt-[138px] pb-[100px] ">
          <Image src={Footer}>

          </Image>
        </footer>
      </main>


    </div>
  );
}