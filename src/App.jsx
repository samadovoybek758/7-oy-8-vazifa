import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextField from '@mui/material/TextField';
import {
  faPaperPlane,
  faBell,
  faChartLine,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import SelectCountry from "./components/SelectCountry";

function App() {
  return (
    <div className="container w-[1440px] mx-auto">
      <header className="w-[1200px] mx-auto flex justify-between items-center mt-3 font-sans">

        <div className="flex gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 710 568.71" class="w-[50px] text-white">…</svg>
          <span className="font-medium">Personal /</span>
          <span className="text-gray-600  font-medium"> Busines</span>
        </div>
        <ul className="flex gap-4 font-semibold">
          <li className="hover:bg-slate-400 rounded-md flex justify-center items-center p-1">Send Money</li>
          <li className="hover:bg-slate-400 rounded-md flex justify-center items-center p-1">Converter</li>
          <li className="hover:bg-slate-400 rounded-md flex justify-center items-center p-1">Currency API</li>
          <li className="hover:bg-slate-400 rounded-md flex justify-center items-center p-1">Tools</li>
          <li className="hover:bg-slate-400 rounded-md flex justify-center items-center p-1">Resources</li>
        </ul>

        <div>
          <button className="btn hover:bg-slate-600 hover:text-white py-2 px-6 rounded-md mr-2">Sign In</button>
          <button className="btn bg-blue-600 text-white hover:bg-blue-400 py-2 px-6 rounded-md">Register</button>
        </div>
      </header>

      <main className=" text-center mt-10  mb-6">
        <h1 className="text-gray-600 text-5xl font-semibold mb-3">Xe Currency Converter</h1>
        <p className="text-xl text-gray-600 font-sans font-semibold">Check live foreign currency exchange rates</p>
      </main>
      <div className="container max-w-[1200px] p-5 rounded-3xl border shadow-xl  mx-auto my-auto mt-10">
        <div className="p-3 max-w-[1136px] rounded-3xl flex gap-1 border border-solid border-gray-400 mx-auto text-gray-600">
          <button className="bg-gray-700 text-white flex gap-1 py-1 w-[273px] rounded-3xl justify-center items-center hover:bg-slate-500">
            <FontAwesomeIcon icon={faCoins} />
            convert
          </button>
          <button className="bg-white  flex gap-1 py-1 w-[273px] rounded-3xl justify-center items-center hover:bg-slate-300">
            <FontAwesomeIcon icon={faPaperPlane} />
            send
          </button>
          <button className="bg-white flex gap-1 py-1 w-[273px] rounded-3xl justify-center items-center hover:bg-slate-300">
            <FontAwesomeIcon icon={faChartLine} />
            charts
          </button>
          <button className="bg-white flex gap-1 py-1 w-[273px] rounded-3xl justify-center items-center hover:bg-slate-300">
            <FontAwesomeIcon icon={faBell} />
            alert
          </button>
        </div>

        <div className=" w-[1150px] mt-4 flex gap-2 mx-auto">
         
          <TextField
          id="filled-number"
          label="Number"
          sx={{width:354,
            backgroundColor: "white"
          }}
          type="number"
          variant="filled"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
             <SelectCountry ></SelectCountry>
             <SelectCountry ></SelectCountry>

         
        </div>
      </div>
    </div>
  );
}

export default App;
