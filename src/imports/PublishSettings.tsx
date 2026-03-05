import svgPaths from "./svg-souocavr0j";

function IconChevron() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.71 8">
        <g id="Icon/Chevron">
          <path d={svgPaths.p3c1abe80} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed() {
  return (
    <div className="relative rounded-[1.5px] shrink-0 size-[12px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[6px] h-[19px] items-center relative shrink-0 w-[380px]" data-name="Header">
      <IconChevronCollapsed />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Version History</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[6px] items-center leading-[0] overflow-clip relative shrink-0 text-[#36415d] text-[12px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Version</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Publish Date</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">By</p>
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar />
    </div>
  );
}

function IconMore() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date />
      </div>
      <Users />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore />
        </div>
      </div>
    </div>
  );
}

function Version1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar1() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users1() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar1 />
    </div>
  );
}

function IconMore1() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date1 />
      </div>
      <Users1 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore1 />
        </div>
      </div>
    </div>
  );
}

function Version2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar2() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users2() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar2 />
    </div>
  );
}

function IconMore2() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date2 />
      </div>
      <Users2 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore2 />
        </div>
      </div>
    </div>
  );
}

function Version3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar3() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users3() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar3 />
    </div>
  );
}

function IconMore3() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date3 />
      </div>
      <Users3 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore3 />
        </div>
      </div>
    </div>
  );
}

function Version4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar4() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users4() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar4 />
    </div>
  );
}

function IconMore4() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date4 />
      </div>
      <Users4 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore4 />
        </div>
      </div>
    </div>
  );
}

function Version5() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar5() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users5() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar5 />
    </div>
  );
}

function IconMore5() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version5 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date5 />
      </div>
      <Users5 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore5 />
        </div>
      </div>
    </div>
  );
}

function Version6() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar6() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users6() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar6 />
    </div>
  );
}

function IconMore6() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version6 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date6 />
      </div>
      <Users6 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore6 />
        </div>
      </div>
    </div>
  );
}

function Version7() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar7() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users7() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar7 />
    </div>
  );
}

function IconMore7() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date7 />
      </div>
      <Users7 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore7 />
        </div>
      </div>
    </div>
  );
}

function Version8() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar8() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users8() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar8 />
    </div>
  );
}

function IconMore8() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version8 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date8 />
      </div>
      <Users8 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore8 />
        </div>
      </div>
    </div>
  );
}

function Version9() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar9() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users9() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar9 />
    </div>
  );
}

function IconMore9() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version9 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date9 />
      </div>
      <Users9 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore9 />
        </div>
      </div>
    </div>
  );
}

function Version10() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-px relative shrink-0 w-[60px]" data-name="version">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">0.99</p>
      </div>
    </div>
  );
}

function Date10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">November 19, 2024 at 2:48 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatar10() {
  return (
    <div className="bg-[#aa74b5] mr-[-4px] relative rounded-[100px] shrink-0 size-[24px]" data-name="User avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[12px] size-[24px] text-[10px] text-center text-white top-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">LG</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Users10() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="users">
      <UserAvatar10 />
    </div>
  );
}

function IconMore10() {
  return (
    <div className="relative size-[18px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/More">
          <path d={svgPaths.p26700b00} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function HistoryItem10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="History Item">
      <div className="flex flex-row items-center self-stretch">
        <Version10 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date10 />
      </div>
      <Users10 />
      <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore10 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[220px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <HistoryItem />
      <HistoryItem1 />
      <HistoryItem2 />
      <HistoryItem3 />
      <HistoryItem4 />
      <HistoryItem5 />
      <HistoryItem6 />
      <HistoryItem7 />
      <HistoryItem8 />
      <HistoryItem9 />
      <HistoryItem10 />
    </div>
  );
}

function PublishingHistoryList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="publishing history list">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function PublishSettings() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Publish settings">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Header />
        <PublishingHistoryList />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}