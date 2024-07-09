import { Collapse } from "antd";
import { images } from "./config";
import { MenuOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  const items = [
    {
      label: "Size & fit",
      children: "",
    },
    {
      label: "Care",
      children: "",
    },
    {
      label: "Composition",
      children: "",
    },
  ];
  return (
    <div>
      <div className="flex justify-between my-4 items-center px-5">
        <MenuOutlined />
        <div className="font-[600] text-2xl text-center">Foculty</div>
        <div className="flex items-center gap-x-3 text-left">
          <SearchOutlined />

          <img src="/images/heart.png" alt="" />
          <img src="/images/user.png" alt="" />
          <img src="/images/shop.png" alt="" />
        </div>
      </div>
      <div className="max-w-[1026px] flex gap-x-2 text-xs font-[400] mb-2 mx-auto">
        <button className="text-[#6E7C87]">Home</button>
        <RightOutlined style={{ color: '#B0BABF' }}/>
        <button className="text-[#6E7C87]">Catalog</button>
        <RightOutlined style={{ color: '#B0BABF' }}/>
        <button>Cotton sweatshirt</button>
      </div>
      <div className="max-w-[1026px] grid grid-cols-10 gap-x-4 mx-auto">
        <div className="col-span-1">
          {images.map((image, i) => (
            <div className="mb-2 w-full" key={i}>
              <img src={image.url} alt="" className="w-full"/>
            </div>
          ))}
        </div>
        <div className="col-span-6">
          <img src="/images/image18.png" alt="" className="w-full mb-2" />
        </div>
        <div className="col-span-3 pl-10 text-sm">
          <div className="bg-[#EEF0F2] p-1 font-[600] text-[14px] w-max rounded-md">
            New!
          </div>
          <div className="font-bold text-4xl text-[#252C32]">
            Cotton sweatshirt <br /> $1,299
          </div>
          <p className="text-[#6E7C87] mt-5 mb-10">107293</p>
          <p className="text-[#252C32] font-[400]">
            Relaxed fit <br />
            Crew neck <br />
            Drop shoulder sleeves <br />
            Elasticated neckline, hemline and cuffs <br />
            Made in Russia
          </p>
          <div className="mt-10">
            <p className="text-[#252C32] font-[400]">Size</p>
            <div className="w-max grid grid-cols-4 mt-1">
              <button className="bg-[#E5E9EB] px-1 rounded-sm">XS</button>
              <button className="bg-[#F6F8F9] px-1">S</button>
              <button className="bg-[#F6F8F9] px-1">M</button>
              <button className="bg-[#F6F8F9] px-1 rounded-sm">L</button>
            </div>
          </div>

          <button className="p-1 w-full text-center bg-[#4094F7] text-[#F6F8F9] rounded-md mt-4">
            Add to Cart
          </button>
          <div className="flex justify-center mt-2 items-center">
            <img src="/images/Vector.png" className="h-[10px]" alt="" />
            <p className="text-[#252C32] font-[400] ml-3 mb-3">
              Add to Wishlist
            </p>
          </div>
          <Collapse items={items} className="mt-3" />
        </div>
      </div>
    </div>
  );
}

export default App;
