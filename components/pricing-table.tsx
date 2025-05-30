'use client'

import Link from 'next/link'
import { useState } from 'react'

interface PricingTabProps {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
  
}
    
function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full container ${props.popular ? 'dark' : 'dark'}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div id="partner" className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-[#ffd700] text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-200 font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-200 font-bold text-3xl">$</span>
            <span className="text-slate-200 font-bold text-4xl">{props.yearly ? props.price.yearly : props.price.monthly}</span>
            {props.planName === "Coaching" && <span className="crossed-out text-red-500 relative text-xl font-semibold"> /60$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
            {props.planName === "partnership" && <span className="crossed-out text-red-500 relative text-xl font-semibold"> /60$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
            {props.planName === "Consulting" && <span className="crossed-out text-red-500 relative text-2xl font-semibold">&nbsp;80$ <span className='h-[1px] absolute rotate-[145deg] w-[80%] bg-white left-2 top-[50%]'></span><span className='h-[1px] absolute rotate-[35deg] w-[80%] bg-white left-2 top-[50%]'></span></span>}
          </div>
          <div className="text-sm text-slate-500 mb-5">{props.planDescription}</div>
          <Link href="#contact" scroll={true} className="relative z-[20] w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150">
            Purchase Plan
          </Link>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow justify-items-end ">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex mx-auto" >
                <span className='mx-auto'>{feature}</span>
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export function PricingTable() {
  const [yearly, setYearly] = useState<boolean>(true)
 
  return (
    <div>

      {/* Pricing toggle */}
      <div className="relative z-[20] flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-slate-900 rounded-full">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${yearly ? 'translate-x-0' : 'translate-x-full'}`}></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${yearly ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
          >
            استشارات
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${yearly ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`}
            onClick={() => setYearly(false)}
            aria-pressed={yearly}
          >
            التدريب  
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-
       lg:max-w-none">

        {/* Pricing tab*/}
        {yearly==true && 
        <PricingTab
          yearly={yearly}
          planName="Consulting"
          price={{ yearly: 29, monthly: 35 }}
          planDescription=".
هل لديك أسئلة؟"
          features={[
            '. هل لديك أسئلة؟',
            ' اوتحويل الأموال - كل شيء يتم',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
          ]} />}
        <PricingTab
          yearly={yearly}
          planName="Coaching"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="ولار في اليوم؟ نحن أول برنامج مدفوع بربح مضمون من خلال عقد قانوني. بالإضافة إلى ذلك، نتولى كل شيء من المنتجات إلى الشحن وتحويل الأموال - كل شيء يتم العناية به من أجلك."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
          ]} />
        {yearly==true && 
        <PricingTab
          yearly={yearly}
          popular={true}
          planName="partnership"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            ' المنتجات إلى الشحن وتحويل الأموال - كل شيء يتم',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
            'Free from repetition',
          ]} />}
        
      </div>

    </div>
  )
}
export default PricingTab;