import svgPaths from "./svg-40vprjso6m";

function Group() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3a31b80} fill="var(--fill-0, #36415D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconAi() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/AI">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">AI Studio</p>
      </div>
    </div>
  );
}

function BradCrumbs() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="brad crumbs">
      <Frame />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-[971px]">
      <BradCrumbs />
    </div>
  );
}

function BreadCrumbs() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Bread crumbs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function AiStudioLink() {
  return (
    <a className="bg-gradient-to-r content-stretch cursor-pointer flex from-[#7b00ff] items-center justify-center overflow-clip p-[8px] relative rounded-[10px] shadow-[0px_4px_33.7px_0px_rgba(85,0,255,0.25)] shrink-0 to-[#07f]" data-name="AI Studio Link" href="https://www.figma.com/proto/4ZImhRsw5DGtjB49eWeQbG/AI-Studio?page-id=0%3A1&node-id=2059-2969&p=f&t=isrYhacqmM3KTjUt-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2059%3A2969">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]" dir="auto">
          For full experience
        </p>
      </div>
    </a>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <IconAi />
          <BreadCrumbs />
          <AiStudioLink />
        </div>
      </div>
    </div>
  );
}

function IconEscape1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Icon/Escape">
          <path d={svgPaths.p127dfa40} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon/Escape">
      <IconEscape1 />
    </div>
  );
}

function Disclamer() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Disclamer">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-['Open_Sans:Regular',sans-serif] font-bold font-normal leading-[0] relative shrink-0 text-[#36415d] text-[0px] text-[12px] text-center" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <span className="leading-[normal]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`This page manages agents, which define how the chat bot behaves in your workspace. `}</span>
            <span className="decoration-solid leading-[normal] text-[#2f80ed] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Learn more
            </span>
          </p>
          <IconEscape />
        </div>
      </div>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon/Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon/Search">
          <path d={svgPaths.pbb20180} fill="var(--fill-0, #36415D)" id="Icon/Search_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#d9e0f0] content-stretch flex h-[32px] items-center justify-between px-[12px] relative rounded-[10px] shrink-0 w-[228px]">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Search agents...
      </p>
      <IconSearch />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="spacer" />;
}

function IconLibraryBook() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Library Book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Library Book">
          <path d={svgPaths.p31f2d600} fill="var(--fill-0, white)" id="book_2" />
        </g>
      </svg>
    </div>
  );
}

function IconTextButton() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Icon & textButton">
      <IconLibraryBook />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Knowledge Source
      </p>
    </div>
  );
}

function IconTextButton1() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Icon & textButton">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        + New Agent
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full" data-name="header">
      <Frame8 />
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Spacer />
      </div>
      <IconTextButton />
      <IconTextButton1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[10px] h-[22px] items-center relative shrink-0 w-[309px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Name
      </p>
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[9px]">
            <div className="absolute inset-[-3.68px_-5.56%_-3.68px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 7.36396">
                <path d={svgPaths.p28a47700} fill="var(--stroke-0, #36415D)" id="Arrow 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[141px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Publish state
      </p>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[115px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Last modified
      </p>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[103px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Created by
      </p>
    </div>
  );
}

function PlaceHolder() {
  return <div className="h-[22px] shrink-0 w-[24px]" data-name="Place holder" />;
}

function Titles() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Titles">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <Name />
      <Name1 />
      <Name2 />
      <Name3 />
      <PlaceHolder />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Handle User errors</p>
      </div>
    </div>
  );
}

function Published() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published />
    </div>
  );
}

function Frame19() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame1 />
          <Frame9 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Apr 15, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame19 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Handle Remote Support Calls</p>
      </div>
    </div>
  );
}

function PublishedBlocked() {
  return (
    <div className="absolute bg-[#fbe7e8] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published/Blocked">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a30d11] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Unpublished
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <PublishedBlocked />
    </div>
  );
}

function Frame20() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame2 />
          <Frame10 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">May 20, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame20 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Run Maintenance Checklist</p>
      </div>
    </div>
  );
}

function Published1() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published1 />
    </div>
  );
}

function Frame21() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine2() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame3 />
          <Frame11 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Jun 30, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame21 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Assist With Calibration</p>
      </div>
    </div>
  );
}

function Published2() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published2 />
    </div>
  );
}

function Frame22() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine3() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame4 />
          <Frame12 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Jul 25, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Dartanian Amfiblian The Third</p>
          </div>
          <Frame22 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Order Spare Parts</p>
      </div>
    </div>
  );
}

function Published3() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published3 />
    </div>
  );
}

function Frame23() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine4() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame5 />
          <Frame13 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Aug 10, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame23 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Perform Diagnostics</p>
      </div>
    </div>
  );
}

function Published4() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published4 />
    </div>
  );
}

function Frame24() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine5() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame6 />
          <Frame14 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Sep 5, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame24 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-[300px]">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Help With Startup Sequence</p>
      </div>
    </div>
  );
}

function Published5() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[11px] py-[8px] rounded-[22px] top-0 w-[120px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Published
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[147px]">
      <Published5 />
    </div>
  );
}

function Frame25() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" />;
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

function AgentLine6() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[3px] relative w-full">
          <Frame7 />
          <Frame15 />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[118px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Oct 12, 2026</p>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[229.189px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Tobias Greenfield</p>
          </div>
          <Frame25 />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <IconMore6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Titles />
      <AgentLine />
      <AgentLine1 />
      <AgentLine2 />
      <AgentLine3 />
      <AgentLine4 />
      <AgentLine5 />
      <AgentLine6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function AgentList() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Agent list">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#36415d] text-[16px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          AI Agents
        </p>
        <Header1 />
        <Frame17 />
      </div>
    </div>
  );
}

function AiWorkFlowsList() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip p-[20px] relative shrink-0 w-[1145px]" data-name="AI Work Flows list">
      <Disclamer />
      <AgentList />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <AiWorkFlowsList />
      </div>
    </div>
  );
}

function ContentTemplate() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Content Template">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function AiStudioPage() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="AI Studio Page">
      <ContentTemplate />
    </div>
  );
}