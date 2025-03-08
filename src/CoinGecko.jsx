import React from "react";

const CoinGecko = ({isLoading, Data}) => {
    //  console.log(Data);
     if (isLoading) {
        return <h1 className="text-center text-white text-2xl mt-10">Loading...</h1>;
      }
  return (
    <div className=" w-[95%] mx-auto mt-6">
      <table className="table-auto mx-auto rounded-md text-white overflow-hidden  w-full text-center border-separate bg-gray-600">
        <thead className="">
          <tr className="[&>*]:border [&>*]:border-black [&>*]:p-2">
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change %</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        {
            Data.map((item, index)=>{
                return   <tbody key={index} >
                            <tr className="[&>*]:border [&>*]:border-black">
                            <td>{item.market_cap_rank}</td>
                            <td >
                                <div className="flex gap-4 justify-items-start m-2 items-center">
                                 <img className="w-10 h-10" src={item.image} alt="img" /> 
                                <p>{item.id}</p>
                                </div>
                            </td>
                            <td> ${item.current_price}</td>
                            <td className={item.price_change_percentage_24h >0 ? 'text-green-500' : 'text-red-600'}> {item.price_change_percentage_24h}%</td>
                            <td> ${item.market_cap}</td>
                            </tr>
              </tbody>
            })
        }
      </table>
    </div>
  );
};

export default CoinGecko;
