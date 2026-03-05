import svgPaths from "./svg-zo2c6wenwl";

function IconRemoteSupportOutline1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-[calc(50%-0.29px)] top-[calc(50%-0.25px)] w-[17.415px]" data-name="Icon/Remote Support/Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.415 20">
        <g id="Icon/Remote Support/Outline">
          <path d={svgPaths.p2ac58860} fill="var(--fill-0, #36415D)" id="headset_mic" />
        </g>
      </svg>
    </div>
  );
}

function IconRemoteSupportOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Remote Support/Outline">
      <IconRemoteSupportOutline1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Remote Support</p>
      </div>
    </div>
  );
}

function BradCrumbs() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="brad crumbs">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0">
      <BradCrumbs />
    </div>
  );
}

function BreadCrumbs() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Bread crumbs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function ButtonRedStrokeHover() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="button / red stroke / hover">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create meeting
      </p>
    </div>
  );
}

function RemoteSupportPageHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Remote Support Page Header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <IconRemoteSupportOutline />
          <BreadCrumbs />
          <ButtonRedStrokeHover />
        </div>
      </div>
    </div>
  );
}

function IconMultipleUsers1() {
  return (
    <div className="absolute bottom-1/4 left-0 right-0 top-1/4" data-name="Icon/Multiple Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
        <g id="Icon/Multiple Users">
          <path d={svgPaths.p369d3080} fill="var(--fill-0, #36415D)" id="groups_2" />
        </g>
      </svg>
    </div>
  );
}

function IconMultipleUsers() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Multiple Users">
      <IconMultipleUsers1 />
    </div>
  );
}

function Frame4() {
  return <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px" />;
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <IconMultipleUsers />
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">People</p>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
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
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-hidden">Type a name</p>
          </div>
          <IconSearch />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <FrontlineSearchInputField />
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">P</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Pablo Picasso</p>
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

function IconPhone() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Q</p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Quentin Tarantino</p>
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

function IconPhone1() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone1 />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">R</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Rosalind Franklin</p>
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

function IconPhone2() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone2 />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">S</p>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Simone de Beauvoir</p>
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

function IconPhone3() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone3 />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">T</p>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Toni Morrison</p>
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

function IconPhone4() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone4 />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">U</p>
      </div>
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Ursula K. Le Guin</p>
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

function IconPhone5() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
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
          <IconPhone5 />
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

function UserIcon6() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">V</p>
      </div>
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Vincent van Gogh</p>
      </div>
    </div>
  );
}

function UserName6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon6 />
      <Name6 />
    </div>
  );
}

function IconPhone6() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore6() {
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

function UserItem6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName6 />
          <IconPhone6 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon7() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">W</p>
      </div>
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">William Shakespeare</p>
      </div>
    </div>
  );
}

function UserName7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon7 />
      <Name7 />
    </div>
  );
}

function IconPhone7() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore7() {
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

function UserItem7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName7 />
          <IconPhone7 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon8() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">X</p>
      </div>
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Xenophon</p>
      </div>
    </div>
  );
}

function UserName8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon8 />
      <Name8 />
    </div>
  );
}

function IconPhone8() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore8() {
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

function UserItem8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName8 />
          <IconPhone8 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon9() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Y</p>
      </div>
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Yoko Ono</p>
      </div>
    </div>
  );
}

function UserName9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon9 />
      <Name9 />
    </div>
  );
}

function IconPhone9() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore9() {
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

function UserItem9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName9 />
          <IconPhone9 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon10() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Z</p>
      </div>
    </div>
  );
}

function Name10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Zora Neale Hurston</p>
      </div>
    </div>
  );
}

function UserName10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon10 />
      <Name10 />
    </div>
  );
}

function IconPhone10() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore10() {
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

function UserItem10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName10 />
          <IconPhone10 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore10 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon11() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">A</p>
      </div>
    </div>
  );
}

function Name11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Albert Einstein</p>
      </div>
    </div>
  );
}

function UserName11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon11 />
      <Name11 />
    </div>
  );
}

function IconPhone11() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore11() {
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

function UserItem11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName11 />
          <IconPhone11 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore11 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon12() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">B</p>
      </div>
    </div>
  );
}

function Name12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Bob Dylan</p>
      </div>
    </div>
  );
}

function UserName12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon12 />
      <Name12 />
    </div>
  );
}

function IconPhone12() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore12() {
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

function UserItem12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName12 />
          <IconPhone12 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore12 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon13() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">C</p>
      </div>
    </div>
  );
}

function Name13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Cleopatra</p>
      </div>
    </div>
  );
}

function UserName13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon13 />
      <Name13 />
    </div>
  );
}

function IconPhone13() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore13() {
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

function UserItem13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName13 />
          <IconPhone13 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore13 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon14() {
  return (
    <div className="bg-[#71a2ed] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[20px]" data-name="user icon">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">D</p>
      </div>
    </div>
  );
}

function Name14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Dolly Parton</p>
      </div>
    </div>
  );
}

function UserName14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <UserIcon14 />
      <Name14 />
    </div>
  );
}

function IconPhone14() {
  return <div className="shrink-0 size-[24px]" data-name="Icon/Phone" />;
}

function IconMore14() {
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

function UserItem14() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[10px] shrink-0 w-full" data-name="User Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <UserName14 />
          <IconPhone14 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore14 />
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
          <UserItem6 />
          <UserItem7 />
          <UserItem8 />
          <UserItem9 />
          <UserItem10 />
          <UserItem11 />
          <UserItem12 />
          <UserItem13 />
          <UserItem14 />
        </div>
      </div>
    </div>
  );
}

function RemoteSupportUsersMenu() {
  return (
    <div className="bg-white h-full relative rounded-[10px] shrink-0 w-[310px]" data-name="Remote Support Users Menu">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame2 />
        <RemoteSupportUsersList />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function IconCalendar1() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Icon/Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 15.8333">
        <g id="Icon/Calendar">
          <path d={svgPaths.p21e24ec0} fill="var(--fill-0, #36415D)" id="calendar_month" />
        </g>
      </svg>
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Icon/Calendar">
      <IconCalendar1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[6px] h-[19px] items-center relative shrink-0 w-full" data-name="Header">
      <IconCalendar />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Your Upcoming Meetings</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Header />
      </div>
    </div>
  );
}

function ScheduleButton() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Schedule Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        + Schedule Meeting
      </p>
    </div>
  );
}

function NoScheduledMeetingsIndicator() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="No Scheduled Meetings Indicator">
      <div className="flex flex-col items-center justify-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#36415d] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="whitespace-pre-wrap">
              <span className="leading-[normal]">{`Your scheduled meetings will show here. `}</span>
              <span className="leading-[normal] text-[#2f80ed]">Learn more</span>
            </p>
          </div>
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
}

function ItemChangelogPanel() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-[310px] relative rounded-[10px]" data-name="Item Changelog Panel">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Top />
      <NoScheduledMeetingsIndicator />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-wrap gap-[12px] items-start p-[12px] relative size-full">
        <RemoteSupportUsersMenu />
        <ItemChangelogPanel />
      </div>
    </div>
  );
}

export default function RemoteSupportPage() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] size-full" data-name="Remote Support Page">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RemoteSupportPageHeader />
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}