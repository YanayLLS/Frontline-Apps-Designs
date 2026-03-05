import svgPaths from "./svg-kzu5oxpmz7";

export default function FilterMenu({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[6px] items-start p-[15px] relative rounded-[10px] w-[436px]"} data-name="Filter menu">
      <div aria-hidden="true" className="absolute border-2 border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[1px_1px_10px_0px_rgba(0,0,0,0.15)]" />
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center leading-[0] px-[2px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal] whitespace-pre-wrap">Filter by</p>
            </div>
            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[21px] justify-center relative shrink-0 text-[#2f80ed] text-[12px] text-center w-[80px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal] whitespace-pre-wrap">clear filter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center p-[6px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="leading-[normal] whitespace-pre-wrap">Location</p>
            </div>
            <div className="content-stretch flex h-[30px] items-center justify-center p-[6px] relative rounded-[10px] shrink-0 w-[252px]" data-name="Project selection">
              <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                <p className="leading-[normal] whitespace-pre-wrap">Select location</p>
              </div>
              <div className="absolute right-[4.01px] size-[23.99px] top-[3px]" data-name="SVG">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.99 23.99">
                  <g id="SVG">
                    <path d={svgPaths.p1cdea100} fill="var(--fill-0, #36415D)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}