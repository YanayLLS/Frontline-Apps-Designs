import svgPaths from "./svg-albmkprcym";

function Spacer() {
  return <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px" data-name="spacer" />;
}

function IconDownload1() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Icon/Download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Icon/Download">
          <path d={svgPaths.pe512100} fill="var(--fill-0, #2F80ED)" id="download" />
        </g>
      </svg>
    </div>
  );
}

function IconDownload() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/Download">
      <IconDownload1 />
    </div>
  );
}

function InstallApp() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="install app">
      <IconDownload />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Install App</p>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="bg-[#4d87ca] content-stretch flex flex-col items-center justify-center relative rounded-[25px] shrink-0 size-[24px]" data-name="user Avatar">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">WW</p>
      </div>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon/Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon/Search">
          <path d={svgPaths.p1fc9e400} fill="var(--fill-0, #36415D)" id="Icon/Search_2" />
        </g>
      </svg>
    </div>
  );
}

function SearchField() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center p-[8px] relative rounded-[10px] shrink-0 w-[330px]" data-name="Search field">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <IconSearch />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3a31b80} fill="url(#paint0_linear_3_1296359)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1296359" x1="8.91572" x2="8.91572" y1="1.89954" y2="16.3207">
            <stop stopColor="#5B19B4" />
            <stop offset="1" stopColor="#004FFF" />
          </linearGradient>
        </defs>
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

function ChatButton() {
  return (
    <button className="aspect-[28/28] cursor-pointer h-full relative rounded-[10px] shrink-0" data-name="Chat button">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <IconAi />
      </div>
      <div aria-hidden="true" className="absolute border border-[#5b19b4] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_17.7px_0px_#9747ff]" />
    </button>
  );
}

function Search() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[6px] h-[34px] items-center left-1/2 rounded-[10px] top-1/2" data-name="search">
      <SearchField />
      <ChatButton />
    </div>
  );
}

function TopBar() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Top Bar">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end px-[8px] py-[4px] relative size-full">
          <Spacer />
          <InstallApp />
          <UserAvatar />
          <Search />
        </div>
      </div>
    </div>
  );
}

function IconLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Logo">
          <g id="Union">
            <path d={svgPaths.p2e071580} fill="var(--fill-0, #36415D)" />
            <path d={svgPaths.p159c9f80} fill="var(--fill-0, #36415D)" />
            <path d={svgPaths.p50fb500} fill="var(--fill-0, #36415D)" />
            <path d={svgPaths.p1f65b900} fill="var(--fill-0, #36415D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">WorkspaceName</p>
      </div>
    </div>
  );
}

function IconChevron() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8875 10">
        <g id="Icon/Chevron">
          <path d={svgPaths.p2430cbc0} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed() {
  return (
    <div className="relative rounded-[1.875px] size-[15px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron />
    </div>
  );
}

function ProjectTabMenuItem() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center p-[6px] relative rounded-[10px] shrink-0" data-name="Project tab menu item">
      <IconLogo />
      <Text />
      <div className="flex items-center justify-center relative shrink-0 size-[15px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <IconChevronCollapsed />
        </div>
      </div>
    </div>
  );
}

function DockToRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dock_to_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dock_to_right">
          <mask height="24" id="mask0_3_1010866" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1010866)">
            <path d={svgPaths.p17fc2170} fill="var(--fill-0, #36415D)" id="dock_to_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="header">
      <ProjectTabMenuItem />
      <DockToRight />
    </div>
  );
}

function IconHome() {
  return (
    <div className="h-[22.353px] relative shrink-0 w-[20px]" data-name="Icon/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.3529">
        <g id="Icon/Home">
          <path d={svgPaths.p242897c0} fill="var(--fill-0, #36415D)" id="Icon/Home_2" />
        </g>
      </svg>
    </div>
  );
}

function LargeText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Large Text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Body">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative w-full">
          <IconHome />
          <LargeText />
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Project tab menu item">
      <Body1 />
    </div>
  );
}

function IconNotifications1() {
  return (
    <div className="absolute inset-[12.5%_20%]" data-name="Icon/Notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Icon/Notifications">
          <path d={svgPaths.p20988100} fill="var(--fill-0, #36415D)" id="notifications" />
        </g>
      </svg>
    </div>
  );
}

function IconNotifications() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Notifications">
      <IconNotifications1 />
    </div>
  );
}

function LargeText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Large Text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Notifications</p>
      </div>
    </div>
  );
}

function NotificationCountHolder() {
  return (
    <div className="bg-[#ff1f1f] content-stretch flex isolate items-center justify-center px-[4px] relative rounded-[25px] shrink-0" data-name="notification count holder">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">99</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Body">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative w-full">
          <IconNotifications />
          <LargeText1 />
          <NotificationCountHolder />
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Project tab menu item">
      <Body2 />
    </div>
  );
}

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
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Remote Support/Outline">
      <IconRemoteSupportOutline1 />
    </div>
  );
}

function LargeText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Large Text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Remote Support</p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Body">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative w-full">
          <IconRemoteSupportOutline />
          <LargeText2 />
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Project tab menu item">
      <Body3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1c242b80} fill="var(--fill-0, #36415D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconAi1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/AI">
      <Group1 />
    </div>
  );
}

function LargeText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Large Text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">AI Studio</p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Body">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative w-full">
          <IconAi1 />
          <LargeText3 />
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Project tab menu item">
      <Body4 />
    </div>
  );
}

function IconArchive() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Archive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Archive">
          <mask height="20" id="mask0_3_1248775" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_3_1248775)">
            <path d={svgPaths.p3a1e1900} fill="var(--fill-0, #36415D)" id="archive" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LargeText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Large Text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Archive</p>
      </div>
    </div>
  );
}

function Body5() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Body">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative w-full">
          <IconArchive />
          <LargeText4 />
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Project tab menu item">
      <Body5 />
    </div>
  );
}

function Home1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Home">
      <ProjectTabMenuItem1 />
      <ProjectTabMenuItem2 />
      <ProjectTabMenuItem3 />
      <ProjectTabMenuItem4 />
      <ProjectTabMenuItem5 />
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Home">
      <Home1 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#c2c9db] h-px shrink-0 w-full" data-name="Divider" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative w-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Projects</p>
        </div>
      </div>
    </div>
  );
}

function IconAdd1() {
  return (
    <div className="absolute contents inset-[20.83%]" data-name="Icon/Add">
      <div className="absolute inset-[20.83%]" data-name="add">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
          <path d={svgPaths.p10b9600} fill="var(--fill-0, #36415D)" id="add" />
        </svg>
      </div>
    </div>
  );
}

function IconAdd() {
  return (
    <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[20%] left-1/2 top-[20%]" data-name="Icon/Add">
      <IconAdd1 />
    </div>
  );
}

function IconButtonInvert() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Icon button Invert">
      <IconAdd />
    </div>
  );
}

function CategoryTitle() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Category title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[6px] relative size-full">
          <Text1 />
          <IconButtonInvert />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Project Phoenix</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Quantum Leap Initiative</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Operation Nightingale</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Project Chimera</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">The Atlas Platform</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Nova Launchpad</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Titan Analytics Engine</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Project Evergreen</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Bluebird CRM Overhaul</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Odyssey User Journey Map</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex items-start pr-[139px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Project Lighthouse</p>
        </div>
      </div>
    </div>
  );
}

function ProjectTabMenuItem16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project tab menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Projects">
      <CategoryTitle />
      <ProjectTabMenuItem6 />
      <ProjectTabMenuItem7 />
      <ProjectTabMenuItem8 />
      <ProjectTabMenuItem9 />
      <ProjectTabMenuItem10 />
      <ProjectTabMenuItem11 />
      <ProjectTabMenuItem12 />
      <ProjectTabMenuItem13 />
      <ProjectTabMenuItem14 />
      <ProjectTabMenuItem15 />
      <ProjectTabMenuItem16 />
    </div>
  );
}

function WorkspaceButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Workspace Buttons">
      <Header />
      <Home />
      <Divider />
      <Projects />
    </div>
  );
}

function TabsList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto py-[10px] relative w-full" data-name="Tabs List">
      <WorkspaceButtons />
    </div>
  );
}

function IconHelp1() {
  return (
    <div className="absolute inset-[18.37%_30.33%_18.3%_33.33%]" data-name="Icon/Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72 15.2">
        <g id="Icon/Help">
          <path d={svgPaths.p3ec9f000} fill="var(--fill-0, #36415D)" id="question_mark" />
        </g>
      </svg>
    </div>
  );
}

function IconHelp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Help">
      <IconHelp1 />
    </div>
  );
}

function HelpCenterButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Help center button">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <IconHelp />
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
          <TabsList />
          <HelpCenterButton />
        </div>
      </div>
    </div>
  );
}

function ProjectSideBar() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start overflow-clip relative rounded-[10px] shrink-0 w-[270px]" data-name="Project side bar">
      <Content />
    </div>
  );
}

function IconProject() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Project">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð¹ Icon/Project">
          <rect height="8.75867" id="Rectangle 136" stroke="var(--stroke-0, #36415D)" strokeWidth="2" width="8.75865" x="1" y="13.414" />
          <path d={svgPaths.p1f28ba80} id="Ellipse 29" stroke="var(--stroke-0, #36415D)" strokeWidth="2" />
          <path d={svgPaths.p5f1f300} id="Polygon 15" stroke="var(--stroke-0, #36415D)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[5px] items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Folder name</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[7.41px]" data-name="🔹 Icon Color">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41 12">
          <path clipRule="evenodd" d={svgPaths.p2cf22800} fill="var(--fill-0, #2F80ED)" fillRule="evenodd" id="ð¹ Icon Color" />
        </svg>
      </div>
    </div>
  );
}

function BradCrumbs() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="brad crumbs">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Current Folder</p>
      </div>
    </div>
  );
}

function BradCrumbs1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="brad crumbs">
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] relative rounded-[10px] shrink-0 w-[971px]">
      <BradCrumbs />
      <BradCrumbs1 />
    </div>
  );
}

function BreadCrumbs() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Bread crumbs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function IconNewFolder1() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="🔹 Icon/New Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 11.3333">
        <g id="ð¹ Icon/New Folder">
          <path d={svgPaths.p5b4600} fill="var(--fill-0, #2F80ED)" id="create_new_folder" />
        </g>
      </svg>
    </div>
  );
}

function IconNewFolder() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Icon/New Folder">
      <IconNewFolder1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[30px]">
      <IconNewFolder />
    </div>
  );
}

function Frame9() {
  return <div className="h-[19px] shrink-0 w-px" />;
}

function IconUpload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/Upload">
          <path d={svgPaths.p397b2c00} fill="var(--fill-0, #36415D)" id="upload" />
        </g>
      </svg>
    </div>
  );
}

function IconTextButton() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Icon & textButton">
      <IconUpload />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Import
      </p>
    </div>
  );
}

function IconTextButton1() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Icon & textButton">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <IconProject />
          <BreadCrumbs />
          <Frame6 />
          <Frame9 />
          <IconTextButton />
          <IconTextButton1 />
        </div>
      </div>
    </div>
  );
}

function IconFilter() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/Filter">
          <path d={svgPaths.p17dcd880} fill="var(--fill-0, #36415D)" id="filter_alt" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center p-[6px] relative rounded-[10px] shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Filter</p>
      </div>
    </div>
  );
}

function CreateGroupItem() {
  return (
    <div className="content-stretch flex h-[30px] items-center max-h-[58px] overflow-clip p-[8px] relative rounded-[10px] shrink-0 w-[72px]" data-name="Create Group Item">
      <IconFilter />
      <Frame5 />
    </div>
  );
}

function DropdownField() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[13px] relative rounded-[10px] shrink-0 w-[121px]" data-name="Dropdown field">
      <div aria-hidden="true" className="absolute border-2 border-[#d9e0f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[200px] min-h-px min-w-[50px] overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">List</p>
      </div>
      <div className="h-[10px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
          <path d={svgPaths.p3d88b800} fill="var(--fill-0, #36415D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function KnowledgeBaseHeaderDefault() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Knowledge Base Header/Default">
      <CreateGroupItem />
      <DropdownField />
    </div>
  );
}

function IconDragIndicator() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[125px]" data-name="checkbox field">
      <IconDragIndicator />
    </div>
  );
}

function UserName() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[340px]" data-name="User name">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Name</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[124px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Created by</p>
      </div>
    </div>
  );
}

function LastActive() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Created date</p>
      </div>
    </div>
  );
}

function InvitedBy() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Last Edited by</p>
      </div>
    </div>
  );
}

function InvitedOn() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Last edited</p>
      </div>
    </div>
  );
}

function Spacer1() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer2() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function KnowledgeBaseItem() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <CheckboxField />
      <UserName />
      <Email />
      <LastActive />
      <InvitedBy />
      <InvitedOn />
      <Spacer1 />
      <Spacer2 />
    </div>
  );
}

function IconDragIndicator1() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField1() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator1 />
    </div>
  );
}

function IconChevron1() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.64385 16.3802">
        <g id="Icon/Chevron">
          <path d={svgPaths.p397a5380} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron1 />
    </div>
  );
}

function Chevron() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed1 />
    </div>
  );
}

function IconFolderDefaultDefaultOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Folder/Default/Default Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Folder/Default/Default Outline">
          <path clipRule="evenodd" d={svgPaths.pfdb40f0} fill="var(--fill-0, #36415D)" fillRule="evenodd" id="ð¹ Icon/Folder/Outline" />
        </g>
      </svg>
    </div>
  );
}

function UserName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconFolderDefaultDefaultOutline />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Understanding Machine Repair: Key Procedures</p>
      </div>
    </div>
  );
}

function NameHolder() {
  return (
    <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron />
      <UserName1 />
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Liam Taylor</p>
      </div>
    </div>
  );
}

function LastActive1() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 3</p>
      </div>
    </div>
  );
}

function InvitedBy1() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Legolas</p>
      </div>
    </div>
  );
}

function InvitedOn1() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">10/27/2023</p>
      </div>
    </div>
  );
}

function Spacer3() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer4() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem1() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField1 />
      <NameHolder />
      <Email1 />
      <LastActive1 />
      <InvitedBy1 />
      <InvitedOn1 />
      <Spacer3 />
      <Spacer4 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator2() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField2() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator2 />
    </div>
  );
}

function IconChevron2() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.64385 16.3802">
        <g id="Icon/Chevron">
          <path d={svgPaths.p397a5380} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed2() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron2 />
    </div>
  );
}

function Chevron1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed2 />
    </div>
  );
}

function IconFolderDefaultDefaultOutline1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Folder/Default/Default Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Folder/Default/Default Outline">
          <path clipRule="evenodd" d={svgPaths.pfdb40f0} fill="var(--fill-0, #36415D)" fillRule="evenodd" id="ð¹ Icon/Folder/Outline" />
        </g>
      </svg>
    </div>
  );
}

function UserName2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconFolderDefaultDefaultOutline1 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">How to Identify and Resolve Machine Issues</p>
      </div>
    </div>
  );
}

function NameHolder1() {
  return (
    <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron1 />
      <UserName2 />
    </div>
  );
}

function Email2() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Isabella Martinez</p>
      </div>
    </div>
  );
}

function LastActive2() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 4</p>
      </div>
    </div>
  );
}

function InvitedBy2() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Gandalf</p>
      </div>
    </div>
  );
}

function InvitedOn2() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">10/28/2023</p>
      </div>
    </div>
  );
}

function Spacer5() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer6() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore1() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem2() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField2 />
      <NameHolder1 />
      <Email2 />
      <LastActive2 />
      <InvitedBy2 />
      <InvitedOn2 />
      <Spacer5 />
      <Spacer6 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore1 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator3() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField3() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator3 />
    </div>
  );
}

function IconChevron3() {
  return (
    <div className="absolute inset-[18.44%_31.58%_14.89%_29.17%]" data-name="Icon/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.64385 16.3802">
        <g id="Icon/Chevron">
          <path d={svgPaths.p397a5380} fill="var(--fill-0, #36415D)" id="arrow_forward_ios" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronCollapsed3() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron3 />
    </div>
  );
}

function Chevron2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed3 />
    </div>
  );
}

function IconFolderDefaultDefaultOutline2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Folder/Default/Default Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Folder/Default/Default Outline">
          <path clipRule="evenodd" d={svgPaths.pfdb40f0} fill="var(--fill-0, #36415D)" fillRule="evenodd" id="ð¹ Icon/Folder/Outline" />
        </g>
      </svg>
    </div>
  );
}

function UserName3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconFolderDefaultDefaultOutline2 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">How to Fix Common Machine Problems Efficiently</p>
      </div>
    </div>
  );
}

function NameHolder2() {
  return (
    <div className="content-stretch flex items-center px-[24px] relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron2 />
      <UserName3 />
    </div>
  );
}

function Email3() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">James Wilson</p>
      </div>
    </div>
  );
}

function LastActive3() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 5</p>
      </div>
    </div>
  );
}

function InvitedBy3() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Samwise</p>
      </div>
    </div>
  );
}

function InvitedOn3() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">10/29/2023</p>
      </div>
    </div>
  );
}

function Spacer7() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer8() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore2() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem3() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField3 />
      <NameHolder2 />
      <Email3 />
      <LastActive3 />
      <InvitedBy3 />
      <InvitedOn3 />
      <Spacer7 />
      <Spacer8 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore2 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator4() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField4() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator4 />
    </div>
  );
}

function IconChevronCollapsed4() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed4 />
    </div>
  );
}

function IconProcedure1() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure1 />
    </div>
  );
}

function UserName4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Quick Fixes for Everyday Machine Malfunctions</p>
      </div>
    </div>
  );
}

function NameHolder3() {
  return (
    <div className="content-stretch flex items-center px-[48px] relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron3 />
      <UserName4 />
    </div>
  );
}

function Email4() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Emily Carter</p>
      </div>
    </div>
  );
}

function LastActive4() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 6</p>
      </div>
    </div>
  );
}

function InvitedBy4() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Bilbo</p>
      </div>
    </div>
  );
}

function InvitedOn4() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">10/30/2023</p>
      </div>
    </div>
  );
}

function Spacer9() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer10() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore3() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem4() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField4 />
      <NameHolder3 />
      <Email4 />
      <LastActive4 />
      <InvitedBy4 />
      <InvitedOn4 />
      <Spacer9 />
      <Spacer10 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore3 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator5() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField5() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator5 />
    </div>
  );
}

function IconChevronCollapsed5() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed5 />
    </div>
  );
}

function IconProcedure3() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure3 />
    </div>
  );
}

function UserName5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure2 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Troubleshooting Techniques for Mechanical Issues</p>
      </div>
    </div>
  );
}

function NameHolder4() {
  return (
    <div className="content-stretch flex items-center px-[48px] relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron4 />
      <UserName5 />
    </div>
  );
}

function Email5() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Michael Smith</p>
      </div>
    </div>
  );
}

function LastActive5() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 7</p>
      </div>
    </div>
  );
}

function InvitedBy5() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Arwen</p>
      </div>
    </div>
  );
}

function InvitedOn5() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">10/31/2023</p>
      </div>
    </div>
  );
}

function Spacer11() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer12() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore4() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem5() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField5 />
      <NameHolder4 />
      <Email5 />
      <LastActive5 />
      <InvitedBy5 />
      <InvitedOn5 />
      <Spacer11 />
      <Spacer12 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore4 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator6() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField6() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator6 />
    </div>
  );
}

function IconChevronCollapsed6() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed6 />
    </div>
  );
}

function IconProcedure5() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure5 />
    </div>
  );
}

function UserName6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure4 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Effective Strategies for Machine Troubleshooting</p>
      </div>
    </div>
  );
}

function NameHolder5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron5 />
      <UserName6 />
    </div>
  );
}

function Email6() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Alex Johnson</p>
      </div>
    </div>
  );
}

function LastActive6() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 8</p>
      </div>
    </div>
  );
}

function InvitedBy6() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Gimli</p>
      </div>
    </div>
  );
}

function InvitedOn6() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">11/01/2023</p>
      </div>
    </div>
  );
}

function Spacer13() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer14() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore5() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem6() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField6 />
      <NameHolder5 />
      <Email6 />
      <LastActive6 />
      <InvitedBy6 />
      <InvitedOn6 />
      <Spacer13 />
      <Spacer14 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore5 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator7() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField7() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator7 />
    </div>
  );
}

function IconChevronCollapsed7() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed7 />
    </div>
  );
}

function IconProcedure7() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure7 />
    </div>
  );
}

function UserName7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure6 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Guide to Diagnosing and Fixing Machine Failures</p>
      </div>
    </div>
  );
}

function NameHolder6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron6 />
      <UserName7 />
    </div>
  );
}

function Email7() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Noah Thomas</p>
      </div>
    </div>
  );
}

function LastActive7() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 9</p>
      </div>
    </div>
  );
}

function InvitedBy7() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Sauron</p>
      </div>
    </div>
  );
}

function InvitedOn7() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">11/02/2023</p>
      </div>
    </div>
  );
}

function Spacer15() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer16() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore6() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem7() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField7 />
      <NameHolder6 />
      <Email7 />
      <LastActive7 />
      <InvitedBy7 />
      <InvitedOn7 />
      <Spacer15 />
      <Spacer16 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore6 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator8() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField8() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator8 />
    </div>
  );
}

function IconChevronCollapsed8() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed8 />
    </div>
  );
}

function IconProcedure9() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure9 />
    </div>
  );
}

function UserName8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure8 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Essential Steps for Repairing Your Equipment</p>
      </div>
    </div>
  );
}

function NameHolder7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron7 />
      <UserName8 />
    </div>
  );
}

function Email8() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Sophia Brown</p>
      </div>
    </div>
  );
}

function LastActive8() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 10</p>
      </div>
    </div>
  );
}

function InvitedBy8() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Faramir</p>
      </div>
    </div>
  );
}

function InvitedOn8() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">11/03/2023</p>
      </div>
    </div>
  );
}

function Spacer17() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer18() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore7() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem8() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField8 />
      <NameHolder7 />
      <Email8 />
      <LastActive8 />
      <InvitedBy8 />
      <InvitedOn8 />
      <Spacer17 />
      <Spacer18 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore7 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator9() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField9() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator9 />
    </div>
  );
}

function IconChevronCollapsed9() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed9 />
    </div>
  );
}

function IconProcedure11() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure11 />
    </div>
  );
}

function UserName9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure10 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Repairing Machines: A Practical Guide</p>
      </div>
    </div>
  );
}

function NameHolder8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron8 />
      <UserName9 />
    </div>
  );
}

function Email9() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Olivia Davis</p>
      </div>
    </div>
  );
}

function LastActive9() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 11</p>
      </div>
    </div>
  );
}

function InvitedBy9() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Eowyn</p>
      </div>
    </div>
  );
}

function InvitedOn9() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">11/04/2023</p>
      </div>
    </div>
  );
}

function Spacer19() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer20() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore8() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem9() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField9 />
      <NameHolder8 />
      <Email9 />
      <LastActive9 />
      <InvitedBy9 />
      <InvitedOn9 />
      <Spacer19 />
      <Spacer20 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore8 />
        </div>
      </div>
    </div>
  );
}

function IconDragIndicator10() {
  return <div className="h-[18px] shrink-0 w-[17px]" data-name="Icon/Drag Indicator" />;
}

function CheckboxField10() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[45px]" data-name="checkbox field">
      <IconDragIndicator10 />
    </div>
  );
}

function IconChevronCollapsed10() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed10 />
    </div>
  );
}

function IconProcedure13() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.04114" x2="7.46926" y1="8.96823" y2="1.11164" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="12.4611" x2="17.7231" y1="8.97788" y2="2.21248" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="12.5022" x2="8.21683" y1="7.49548" y2="3.21007" />
          <circle cx="1.78559" cy="8.92762" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="1.78559" />
          <circle cx="13.2168" cy="8.2131" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="1.78559" />
          <circle cx="6.78283" cy="2.49989" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="1.78559" />
          <circle cx="18.2144" cy="1.78559" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="1.78559" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon/Procedure">
      <IconProcedure13 />
    </div>
  );
}

function UserName10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[36px] items-center max-h-[58px] min-h-px min-w-px overflow-clip relative rounded-[10px]" data-name="User name">
      <IconProcedure12 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Step-by-Step Instructions for Machine Repairs</p>
      </div>
    </div>
  );
}

function NameHolder9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[423px]" data-name="Name holder">
      <Chevron9 />
      <UserName10 />
    </div>
  );
}

function Email10() {
  return (
    <div className="content-stretch flex h-[20px] items-start max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[125px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Ava Anderson</p>
      </div>
    </div>
  );
}

function LastActive10() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 12</p>
      </div>
    </div>
  );
}

function InvitedBy10() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[94px]" data-name="invited by">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Théoden</p>
      </div>
    </div>
  );
}

function InvitedOn10() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[87px]" data-name="invited on">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">11/05/2023</p>
      </div>
    </div>
  );
}

function Spacer21() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer22() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function IconMore9() {
  return (
    <div className="relative size-[16px]" data-name="Icon/More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/More">
          <path d={svgPaths.p2ae0c100} fill="var(--fill-0, #36415D)" id="more_horiz" />
        </g>
      </svg>
    </div>
  );
}

function KnowledgeBaseItem10() {
  return (
    <div className="content-stretch flex h-[40px] items-center mb-[-1px] py-[2px] relative shrink-0 w-full" data-name="Knowledge Base Item">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid border-t inset-0 pointer-events-none" />
      <CheckboxField10 />
      <NameHolder9 />
      <Email10 />
      <LastActive10 />
      <InvitedBy10 />
      <InvitedOn10 />
      <Spacer21 />
      <Spacer22 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <IconMore9 />
        </div>
      </div>
    </div>
  );
}

function ItemsList() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Items list">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[9px] pt-[8px] px-[8px] relative size-full">
          <KnowledgeBaseItem />
          <KnowledgeBaseItem1 />
          <KnowledgeBaseItem2 />
          <KnowledgeBaseItem3 />
          <KnowledgeBaseItem4 />
          <KnowledgeBaseItem5 />
          <KnowledgeBaseItem6 />
          <KnowledgeBaseItem7 />
          <KnowledgeBaseItem8 />
          <KnowledgeBaseItem9 />
          <KnowledgeBaseItem10 />
        </div>
      </div>
    </div>
  );
}

function KnowledgeBaseViews() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto p-[20px] relative rounded-[10px] w-[1116px]" data-name="Knowledge Base Views">
      <KnowledgeBaseHeaderDefault />
      <ItemsList />
    </div>
  );
}

function Body6() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <KnowledgeBaseViews />
      </div>
    </div>
  );
}

function KnowledgeBasePage() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Knowledge Base Page">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header1 />
        <Body6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function IconHistory1() {
  return (
    <div className="absolute contents inset-[22.53%_21.1%_19.4%_20.83%]" data-name="Icon/History">
      <div className="absolute inset-[22.53%_21.1%_19.4%_20.83%]" data-name="history">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1484 11.1484">
          <path d={svgPaths.p12216d00} fill="var(--fill-0, #36415D)" id="history" />
        </svg>
      </div>
    </div>
  );
}

function IconHistory() {
  return (
    <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[20%] left-1/2 top-[20%]" data-name="Icon/History">
      <IconHistory1 />
    </div>
  );
}

function IconButtonInvert2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Icon button Invert">
      <IconHistory />
    </div>
  );
}

function IconButtonInvert1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon button Invert">
      <IconButtonInvert2 />
    </div>
  );
}

function Frame8() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" />;
}

function IconDragIndicator12() {
  return (
    <div className="absolute inset-[16.67%_29.17%]" data-name="Icon/Drag Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 10.6667">
        <g id="Icon/Drag Indicator">
          <path d={svgPaths.p150852c0} fill="var(--fill-0, #36415D)" id="drag_indicator" />
        </g>
      </svg>
    </div>
  );
}

function IconDragIndicator11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon/Drag Indicator">
      <IconDragIndicator12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <IconDragIndicator11 />
    </div>
  );
}

function IconEscape1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Icon/Escape">
          <path d={svgPaths.p2dc32500} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon/Escape">
      <IconEscape1 />
    </div>
  );
}

function Frame4() {
  return (
    <button className="block cursor-pointer overflow-clip relative shrink-0 size-[32px]">
      <IconEscape />
    </button>
  );
}

function ChatHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Chat Header">
      <IconButtonInvert1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame8 />
      </div>
      <Frame3 />
      <Frame4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] text-[#36415d] text-[18px] text-center top-[calc(50%-0.5px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">AI Chat</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[10px] relative rounded-[24px] shrink-0" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Create a procedure</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[10px] relative rounded-[24px] shrink-0" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Modify a procedure</p>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[10px] relative rounded-[24px] shrink-0" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Organize project</p>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[10px] relative rounded-[24px] shrink-0" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Ask a question about content</p>
      </div>
    </div>
  );
}

function BotMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Bot Message">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

function ChatContentDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Chat Content/Default">
      <BotMessage />
    </div>
  );
}

function Messages() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Messages">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[8px] relative size-full">
          <ChatHeader />
          <ChatContentDefault />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return <div className="absolute inset-0 rounded-[10px]" data-name="Background" />;
}

function AnimatedCursor() {
  return <div className="h-[24px] shrink-0 w-[2px]" data-name="Animated Cursor" />;
}

function Textfield() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] overflow-hidden text-[#36415d] text-[14px] text-ellipsis text-left top-[calc(50%+0.5px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-hidden">Write your instructions here...</p>
          </div>
          <AnimatedCursor />
        </div>
      </div>
    </div>
  );
}

function Inputfield() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Inputfield">
      <Background />
      <Textfield />
    </button>
  );
}

function LabelInputFieldAiInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label + Input Field – AI Input">
      <Inputfield />
    </div>
  );
}

function ActionsPanel() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[36px] items-center justify-center ml-0 mt-0 relative rounded-[10px] row-1 w-[439px]" data-name="Actions panel">
      <LabelInputFieldAiInput />
    </div>
  );
}

function PromptRow() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative" data-name="Prompt row">
      <ActionsPanel />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#c2c9db] h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <PromptRow />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex gap-[5px] h-[36px] items-center ml-0 mt-0 overflow-clip relative row-1 w-[285px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]" dir="auto">
          Project name
        </p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[7.41px]" data-name="🔹 Icon Color">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41 12">
          <path clipRule="evenodd" d={svgPaths.p2cf22800} fill="var(--fill-0, #2F80ED)" fillRule="evenodd" id="ð¹ Icon Color" />
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item name</p>
      </div>
    </div>
  );
}

function BradCrumbs2() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative" data-name="brad crumbs">
      <Frame2 />
    </div>
  );
}

function IconAttach() {
  return (
    <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[20%] left-1/2 top-[20%]" data-name="Icon/Attach">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%+0.8px)] top-1/2 w-[8.8px]" data-name="attach_file">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8 16">
          <path d={svgPaths.p33f49c00} fill="var(--fill-0, #36415D)" id="attach_file" />
        </svg>
      </div>
    </div>
  );
}

function IconButtonInvert3() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Icon button Invert">
      <IconAttach />
    </div>
  );
}

function IconSend1() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%_16.67%_12.5%]" data-name="Icon/Send">
      <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%]" data-name="send">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 12.8">
          <path d={svgPaths.p9ea3900} fill="var(--fill-0, #36415D)" id="send" />
        </svg>
      </div>
    </div>
  );
}

function IconSend() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 top-[20%] w-[24px]" data-name="Icon/Send">
      <IconSend1 />
    </div>
  );
}

function IconButtonInvert4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Icon button Invert">
      <IconSend />
    </div>
  );
}

function Actions() {
  return (
    <div className="h-[44px] relative rounded-[10px] shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[4px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Context:</p>
          </div>
          <BradCrumbs2 />
          <IconButtonInvert3 />
          <IconButtonInvert4 />
        </div>
      </div>
    </div>
  );
}

function SendMessageInput() {
  return (
    <div className="bg-[#c2c9db] relative rounded-[10px] shrink-0 w-full" data-name="Send Message Input">
      <div aria-hidden="true" className="absolute border border-[#5b19b4] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_10px_0px_rgba(151,71,255,0.5)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[2px] relative w-full">
          <Input />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function SendAMessagePrompt() {
  return (
    <div className="relative rounded-bl-[48px] shrink-0 w-full" data-name="Send a Message Prompt">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[6px] relative w-full">
          <SendMessageInput />
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Chat">
      <Messages />
      <SendAMessagePrompt />
    </div>
  );
}

function ChatWindow() {
  return (
    <div className="bg-white content-stretch flex h-full items-start relative rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[463px]" data-name="Chat window">
      <div aria-hidden="true" className="absolute border border-[#5b19b4] border-solid inset-[-1px] pointer-events-none rounded-bl-[11px] rounded-tl-[11px] rounded-tr-[11px]" />
      <Chat />
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="content-stretch flex gap-[6px] items-start pb-[12px] px-[12px] relative size-full">
        <ProjectSideBar />
        <KnowledgeBasePage />
        <ChatWindow />
      </div>
    </div>
  );
}

export default function KnowledgeBase() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Knowledge Base">
      <TopBar />
      <Body />
    </div>
  );
}