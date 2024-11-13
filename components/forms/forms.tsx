'use client'
import React, { useState } from 'react';
import styles from './Form.module.css';



export default function Form() {
  const [selectedOption, setSelectedOption] = useState<string>("");
const [selectedOption2, setSelectedOption2] = useState<string>("");
const [selectedOption3, setSelectedOption3] = useState<string>("");

const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedOption(event.target.value);
};
const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedOption2(event.target.value);
};
const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedOption3(event.target.value);
};
  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.formGroup}>
        <input
          type="text"
          id="name"
          className={styles.formInput}
          placeholder=" "
        />
        <label htmlFor="name" className={styles.formLabel}>
          FullName
        </label>
      </div>
      <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
                  <input
                    placeholder=""
                    name="fullname"
                    type="text"
                    className="flex h-10 rounded-lg border border-gray-800 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  />
                </div>
              </div>
              <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2 mt-[15px] ">
                <label
                  htmlFor=""
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 ما هو نطاق ميزانيتك ؟ 
                </label>
                <div
                  className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-8 gap-x-12"
                  role="radiogroup"
                >
                  <div className="flex items-center space-x-3 space-y-0">
                    <label className="w-full bg-transparent px-4 py-3 border rounded-lg border-gray-800 flex items-center gap-4">
                      <input
                        className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                      />
                      <div className='text-[#9ca3af]'>استشارات</div>
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <label className="w-full bg-transparent px-4 py-3 border rounded-lg border-gray-800 flex items-center gap-4">
                      <input
                        className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                      />
                      <div className='text-[#9ca3af]'>تدريب</div>
                    </label>
                  </div>
                
                </div>
              </div>
              <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
                <label
                  htmlFor=""
                  className="text-right w-1/3 mt-[15px]"
                >
                  ما هو نطاق ميزانيتك؟
                </label>
                <div
                  className="gap-2 w-full flex flex-col space-y-1"
                  role="radiogroup"
                >
                  <div className="flex items-center space-x-3 space-y-0">
                    <label className="w-full bg-transparent px-4 py-3 border rounded-lg border-gray-800 flex items-center gap-4">
                      <input
                        className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        type="radio"
                        value="option1"
                        checked={selectedOption3 === "option1"}
                        onChange={handleOptionChange3}
                      />
                   <div className="text-right text-[#9ca3af]">
                    <span> من </span>{/* Pas d'espace ici */}
                    <span dir='ltr'>1K$</span>  {/* Pas d'espace ici */}
                    إلى {/* Pas d'espace ici */}
                    <span dir="ltr"> 2.5K$</span>
                  </div>
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <label className="w-full bg-transparent px-4 py-3 border rounded-lg border-gray-800 flex items-center gap-4">
                      <input
                        className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        type="radio"
                        value="option2"
                        checked={selectedOption3 === "option2"}
                        onChange={handleOptionChange3}
                      />
                      <div className="text-right text-[#9ca3af]">
                        <span> من </span>{/* Pas d'espace ici */}
                        <span dir='ltr'>2.5K$</span>  {/* Pas d'espace ici */}
                        إلى {/* Pas d'espace ici */}
                        <span dir="ltr"> 5K$</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-row mt-[15px] flex justify-center">
                <button className={styles.button35}>
                  Send your
                </button>
              </div>
    </div>
    
    
  );
}