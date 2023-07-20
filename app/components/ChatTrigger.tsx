'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

export default function ChatTrigger() {
  return (
    <div className="z-20 not-selectable grid place-items-center">
      <Popover>
        <PopoverTrigger>
          <svg
            className="hover:opacity-70 active:translate-y-0.5 transition-all duration-300 fill-black dark:fill-zinc-300/80"
            version="1.0"
            width="20"
            height="20"
            viewBox="0 0 5288 5358"
          >
            <path d="M2308.5.7c-14.3.5-56.5 3.3-72.9 4.9-344.1 31.9-663.9 195.2-891 454.7-101.9 116.4-182 247.4-239 390.8-9.1 23-22.1 58.6-28.3 77.4l-1.9 5.9-21 4.7C829 989.5 622.9 1095.3 452 1248.4c-116.5 104.5-211.5 225.9-289.2 369.6-133 246-186.3 528.1-152.3 806 33.1 269.7 146.9 523.6 326.1 727.3l12.2 13.7-3.4 10.8c-37.2 116.9-57.1 226.1-63.4 348.2-1.4 26.4-1.4 98.4 0 125.5 11 215.4 70.2 417.6 176.5 603 54.6 95.2 112.9 175.2 183.5 252 24.7 26.9 72.2 73.3 101.1 98.6 217.1 190.8 488.3 306.4 777.4 331.3 40.3 3.5 56.9 4.1 114 4.1 66.2 0 92.8-1.3 149.5-7.6 37.4-4.1 94.4-13.1 124.5-19.8 6.8-1.5 9.3-1.7 10.1-.8.6.7 8.5 9.3 17.6 19.2 31.1 33.8 76.7 77.7 112.8 108.6 217.5 185.9 488.8 296.6 776 316.9 60.4 4.2 137.9 4 200.5-.5 209.5-15.3 414-79.7 593.5-186.8 165.9-99 308.2-231.8 418.4-390.4 72-103.8 130.4-220.2 170.7-340.8 2.4-7.2 4.5-13.1 4.5-13.3.1-.1 10.2-2.5 22.5-5.3 244.4-54.4 468.1-176.2 645.8-351.4 67.7-66.8 121.9-132.1 173-208.5 128.1-191.2 205.3-405.4 227.1-629 4.8-49.9 5.4-64.8 5.5-129.5 0-61.4-.4-73.3-4.1-116.5-24.1-284.3-140.4-558.4-328.1-772.7-8.4-9.7-15.2-18.1-15-18.7 1.8-4.6 13.7-43.8 18.1-59.6 26-92.4 40.7-180.1 47.8-285 1.7-25.3 1.7-126.3 0-152-8.6-128.5-29.5-235.6-69.1-353.1-55.3-164.3-150.1-328.8-265.6-460.9-45.2-51.6-100.6-105.8-153-149.5-142.8-119.1-311.5-208.6-490-259.9-97.1-27.9-181.5-42.6-291.5-50.7-23.2-1.7-115.5-2.3-143.3-1-70.4 3.5-138.4 11.7-203.9 24.9l-18.8 3.7-10.7-12c-16.8-18.8-75.8-77.3-96.8-96-138.8-123.2-291.8-212.3-464.5-270.6C2679.1 29.7 2557.9 7.1 2429 1c-19-.9-99-1.1-120.5-.3zM2440 353.4c38.4 3.3 66.5 6.9 101.2 13.1 162.8 28.9 319.6 100.1 449.6 204.3 7.9 6.3 14 11.8 13.5 12.3-.4.4-5.5 3.4-11.3 6.7-48.8 27.3-1095.5 632.9-1102 637.5-11.2 8-30.8 27.8-39.3 39.7-12.8 18.1-23.5 42.8-28.8 66.6-2.1 9.4-2.2 13.1-2.9 79.9-.4 38.5-.8 382.2-.9 763.7-.1 381.6-.4 693.8-.8 693.8-.5 0-102.7-58.9-227.3-130.8-184.6-106.6-226.9-131.4-228.8-134.2l-2.2-3.3.3-654.1c.3-715.8-.2-656.4 5.7-708.1 23.6-206.7 111.1-401.2 250.6-557.1 15-16.7 51-52.9 69.7-70 114.6-104.8 254.1-182.6 403.7-224.9 69.2-19.6 141.8-31.8 216.5-36.5 22.5-1.4 111.9-.5 133.5 1.4zm1279 419.1c135.7 9.7 261 43.9 381.2 104.1 123.6 61.8 233.2 148.7 321.7 254.9 174.7 209.6 256.8 482.5 226.6 753.5-2.3 20.1-7.6 56.4-8.4 57.3-.4.4-7.5-3.3-15.7-8.2-32.1-19.2-1084.5-626.7-1093.4-631.2-50.2-25.2-112.2-23.5-162 4.5-5.2 2.9-300.4 173.2-655.9 378.5s-647 373.5-647.7 373.8c-1.2.4-1.4-40-1.4-259.8 0-152.4.4-262 1-264.3.5-2.3 2.2-5.2 4.2-7.1 2.9-2.8 1064.5-615.8 1102-636.4 122.6-67.1 262-108.2 404.3-119.1 41.6-3.2 102.8-3.4 143.5-.5zM1009.3 1963.7c.3 599.1.4 646.4 1.9 653.8 7.8 37.1 23.4 66.9 47.8 91.5 5.8 5.8 14.4 13.5 19.3 17.1 5.3 4 262.8 153.2 664.2 385 500.3 288.8 655.2 378.7 654.2 379.5-2.4 2.3-449.3 259.8-453.1 261.1-2.2.8-5.2 1.1-6.9.7-3.3-.7-1085.4-625.6-1111.2-641.7-215.2-134.1-373-347.7-438.4-593.2-53.6-201.5-43.2-415.3 29.6-610.5 79.6-213 229.9-393.4 424.3-509.2 47.5-28.3 91.3-49.9 143.5-70.9 12.1-4.9 22.6-8.9 23.2-8.9 1 0 1.3 131.6 1.6 645.7zm2887.2-45.3c298.1 172.1 548.3 316.8 556 321.4 129.3 78.2 240.8 186.8 323.1 314.7 41.1 63.7 75.7 134 101.4 206 25.7 71.9 43.3 147.5 52 223.7 4.9 42.9 5.5 55.7 5.5 113.8 0 58.1-.7 72.6-5.6 114.2-16.3 141.6-62.2 277.5-134.6 399.1-111.9 187.9-281 333.5-483.5 416.3-8.6 3.5-19.3 7.7-23.7 9.4l-8.1 2.9v-638.3c0-441.2-.3-641.6-1.1-648.7-2.9-28.8-12.7-56-29.1-80.6-9.2-13.8-31.1-36-44.3-44.9-4.9-3.3-302.7-175.7-661.8-382.9-359-207.3-652.4-377.2-652-377.6.7-.6 430.3-248.7 447.8-258.6 5-2.8 6.9-3.3 11-3.1 4.6.3 44.6 23.1 547 313.2zm-962.8 257.9 289.8 167.3.2 335 .3 334.9-208.8 120.5c-114.8 66.2-245.2 141.5-289.9 167.3l-81.2 46.9-290-167.4-290-167.3.2-334.8.2-334.8 289.5-167.3c159.2-92.1 289.6-167.4 289.7-167.5.1-.1 130.6 75.2 290 167.2zM3696 2617c121.3 70 222.2 128.3 224.3 129.7 2.3 1.5 4.6 4.1 5.8 6.6 1.8 4.1 1.9 17.4 1.9 631.7 0 607.9-.2 655.1-3 691.5-6.6 85.2-22.6 164.7-49.5 245-40.9 122.5-106 237.2-190 335.1-69.9 81.5-154.8 153-247 208.1-107 64-222.4 106.7-346.5 128.2-81.4 14.1-171.7 17.9-256 10.6-196.2-17.1-384.6-92.7-538.8-216.3-7.9-6.3-14-11.8-13.5-12.3.4-.4 5.5-3.4 11.3-6.6 15.2-8.5 1085.5-626.9 1091.5-630.6 17.3-10.7 38-30.2 49.8-46.7 8.2-11.5 19.5-34.1 23.6-47.1 4.3-13.7 7.1-28.2 8.1-42.8.6-7.5 1-315.1 1-763.9v-751.4l3.3 2c1.7 1.1 102.4 59.2 223.7 129.2zm-473.5 1206.6c-.9 2.3-2.3 4.8-3.3 5.7-2.7 2.4-1084.1 626.6-1107.2 639.1-116.4 62.9-249.3 102.7-384 115-56.8 5.2-123.6 5.2-181 0-265.1-23.9-511.2-152.9-681.1-357-175.4-210.7-257.1-482.8-226.4-753.9 2.1-18.2 7.6-55.7 8.4-57.2.5-.9 4.7 1.2 14.1 6.8 32.9 19.8 1091.4 630.7 1098.6 634.1 10.6 4.9 26.4 10.1 39.4 13 9.3 2 13.3 2.2 34 2.2s24.7-.2 33.9-2.2c12.8-2.8 28.7-8.1 39.4-13.1 4.5-2.1 302.5-173.8 662.2-381.5l654-377.6.3 261.2c.2 234.4.1 261.7-1.3 265.4z" />
          </svg>
        </PopoverTrigger>
        <PopoverContent className="w-80 rounded-[10px] border-none flex flex-col gap-4 customShadowMedium">
          <header className="w-full flex gap-3 justify-start items-center">
            <div className="flex flex-col items-start text-sm">
              <p className="text-xs">Chat with</p>
              <div className="flex gap-1.5 items-center">
                <p className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-medium">BeatBrain</p>
              </div>
            </div>
          </header>
          <div className="flex flex-col h-80">
            <ChatMessages className="px-2 py-3 flex-1" />
            <ChatInput className="px-4" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
