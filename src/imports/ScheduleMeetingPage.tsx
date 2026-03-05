import svgPaths from "./svg-nmgvwn4834";

function IconEscape1() {
  return (
    <div className="absolute contents inset-[20.83%]" data-name="Icon/Escape">
      <div className="absolute inset-[20.83%]" data-name="close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 8.4">
          <path d={svgPaths.pf2fa500} fill="var(--fill-0, #36415D)" />
        </svg>
      </div>
    </div>
  );
}

function IconEscape() {
  return (
    <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[20%] left-1/2 top-[20%]" data-name="Icon/Escape">
      <IconEscape1 />
    </div>
  );
}

function EscapeButton() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[24px]" data-name="Escape Button">
      <IconEscape />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Schedule Remote Support Meeting</p>
      </div>
      <EscapeButton />
    </div>
  );
}

function FrontlineInputField() {
  return (
    <div className="bg-[#c2c9db] relative rounded-[10px] shrink-0 w-full" data-name="Frontline Input Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-hidden">Meeting with Host Name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DateField() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Date Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">July 04</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateField1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Date Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">10:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateField2() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Date Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">July 04</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateField3() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Date Field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">10:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <DateField />
      <DateField1 />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center w-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">to</p>
      </div>
      <DateField2 />
      <DateField3 />
    </div>
  );
}

function DateField4() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full" data-name="Date Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[19px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Atlantis Standard Time (AST) - UTC +13:37</p>
          </div>
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
    <div className="bg-white h-[35px] relative rounded-[10px] shrink-0 w-[240px]" data-name="Frontline Search Input Field">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] size-full">
        <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] overflow-hidden">Search participants...</p>
        </div>
        <IconSearch />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Participants</p>
      </div>
      <FrontlineSearchInputField />
    </div>
  );
}

function OnlineIndicator() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator />
    </div>
  );
}

function WorkspaceUserLine() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator1() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage1() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator1 />
    </div>
  );
}

function WorkspaceUserLine1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage1 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator2() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage2() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator2 />
    </div>
  );
}

function WorkspaceUserLine2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage2 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator3() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage3() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator3 />
    </div>
  );
}

function WorkspaceUserLine3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage3 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator4() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage4() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator4 />
    </div>
  );
}

function WorkspaceUserLine4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage4 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator5() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage5() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator5 />
    </div>
  );
}

function WorkspaceUserLine5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage5 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator6() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage6() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator6 />
    </div>
  );
}

function WorkspaceUserLine6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage6 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnlineIndicator7() {
  return <div className="absolute bg-[#ff1f1f] border border-solid border-white left-[22.5px] rounded-[100px] size-[9px] top-[21.6px]" data-name="Online Indicator" />;
}

function UserImage7() {
  return (
    <div className="bg-[#2f80ed] relative rounded-[100px] shrink-0 size-[32px]" data-name="User Image">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold inset-0 justify-center leading-[0] text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">UL</p>
      </div>
      <OnlineIndicator7 />
    </div>
  );
}

function WorkspaceUserLine7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace User Line">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <UserImage7 />
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Username Lastname</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">+ Add to meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParticipantsList() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Participants list">
      <WorkspaceUserLine />
      <WorkspaceUserLine1 />
      <WorkspaceUserLine2 />
      <WorkspaceUserLine3 />
      <WorkspaceUserLine4 />
      <WorkspaceUserLine5 />
      <WorkspaceUserLine6 />
      <WorkspaceUserLine7 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[578px] items-center overflow-x-clip overflow-y-auto relative rounded-[10px] shrink-0 w-[612px]" data-name="Content">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Add title</p>
      </div>
      <FrontlineInputField />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Date and Time</p>
      </div>
      <Frame1 />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Timezone</p>
      </div>
      <DateField4 />
      <Frame />
      <ParticipantsList />
    </div>
  );
}

function Frame3() {
  return <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px" />;
}

function PrimaryButton() {
  return (
    <button className="content-stretch cursor-pointer flex h-full items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Primary button">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
        Share link
      </p>
    </button>
  );
}

function PrimaryButton1() {
  return (
    <button className="bg-[#2f80ed] content-stretch cursor-pointer flex items-center justify-center p-[8px] relative rounded-[10px] shrink-0" data-name="Primary button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-left text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schedule Meeting
      </p>
    </button>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full" data-name="buttons">
      <Frame3 />
      <div className="flex flex-row items-center self-stretch">
        <PrimaryButton />
      </div>
      <PrimaryButton1 />
    </div>
  );
}

export default function ScheduleMeetingPage() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Schedule Meeting Page">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[31px] py-[25px] relative rounded-[inherit] size-full">
        <Frame2 />
        <Content />
        <Buttons />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_38.1px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}