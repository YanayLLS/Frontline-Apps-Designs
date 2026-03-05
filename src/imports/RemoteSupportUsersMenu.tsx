import svgPaths from "./svg-qyigehfrei";

function IconEscape1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Icon/Escape">
          <path d={svgPaths.p33ac30f0} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[18px]" data-name="Icon/Escape">
      <IconEscape1 />
    </button>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal]">People</p>
          </div>
          <IconEscape />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-[#c2c9db] h-px shrink-0 w-full" data-name="divider" />;
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/Search">
          <path d={svgPaths.p2280f500} fill="var(--fill-0, #36415D)" id="Icon/Search_2" />
        </g>
      </svg>
    </div>
  );
}

function FrontlineSearchInputField() {
  return (
    <div className="bg-[#c2c9db] h-[35px] relative rounded-[10px] shrink-0 w-full" data-name="Frontline Search Input Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] overflow-hidden">Type a name</p>
          </div>
          <IconSearch />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <FrontlineSearchInputField />
      </div>
    </div>
  );
}

function IconChevron() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3175 7.33333">
        <g id="Icon/Chevron">
          <path d={svgPaths.p16cc7100} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed() {
  return (
    <div className="relative rounded-[3px] size-[11px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative w-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[normal]">In this meeting (2)</p>
        </div>
      </div>
    </div>
  );
}

function CategoryTitle() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Category title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[6px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[11px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconChevronCollapsed />
            </div>
          </div>
          <Text />
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon />
      <Name />
    </div>
  );
}

function IconMore() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon1() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon1 />
      <Name1 />
    </div>
  );
}

function IconMore1() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName1 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon2() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon2 />
      <Name2 />
    </div>
  );
}

function IconMore2() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName2 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon3() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon3 />
      <Name3 />
    </div>
  );
}

function IconMore3() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName3 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon4() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon4 />
      <Name4 />
    </div>
  );
}

function IconMore4() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName4 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon5() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Oscar Wilde</p>
      </div>
    </div>
  );
}

function UserName5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon5 />
      <Name5 />
    </div>
  );
}

function IconMore5() {
  return (
    <div className="relative size-[24px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/More">
          <path d={svgPaths.p25ee9700} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function UserItem5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName5 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RemoteSupportUsersList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Remote Support Users List">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
          <UserItem />
          <UserItem1 />
          <UserItem2 />
          <UserItem3 />
          <UserItem4 />
          <UserItem5 />
        </div>
      </div>
    </div>
  );
}

function People() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="People">
      <CategoryTitle />
      <RemoteSupportUsersList />
    </div>
  );
}

function IconChevron1() {
  return (
    <div className="absolute inset-[18.44%_31.59%_14.89%_29.16%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3175 7.33333">
        <g id="Icon/Chevron">
          <path d={svgPaths.p16cc7100} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[11px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative w-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[normal]">Available</p>
        </div>
      </div>
    </div>
  );
}

function CategoryTitle1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Category title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[6px] relative size-full">
          <IconChevronCollapsed1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function People1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="People">
      <CategoryTitle1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[8px] relative w-full">
        <People />
        <People1 />
      </div>
    </div>
  );
}

export default function RemoteSupportUsersMenu() {
  return (
    <div className="bg-white relative size-full" data-name="Remote Support Users Menu">
      <div className="content-stretch flex flex-col items-center relative size-full">
        <Frame />
        <Divider />
        <Frame1 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}