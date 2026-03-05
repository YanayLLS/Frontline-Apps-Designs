import svgPaths from "./svg-i4bnj7sqex";

function IconHome() {
  return (
    <div className="h-[26.824px] relative shrink-0 w-[24px]" data-name="Icon/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 26.8235">
        <g id="Icon/Home">
          <path d={svgPaths.p27fa6700} fill="var(--fill-0, #36415D)" id="Icon/Home_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Home</p>
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

function Frame6() {
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
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <IconHome />
          <BreadCrumbs />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Welcome, User Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconHistory1() {
  return (
    <div className="absolute inset-[22.53%_21.1%_19.4%_20.83%]" data-name="Icon/History">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0323 11.0323">
        <g id="Icon/History">
          <path d={svgPaths.p25d71e80} fill="var(--fill-0, #36415D)" id="history" />
        </g>
      </svg>
    </div>
  );
}

function IconHistory() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Icon/History">
      <IconHistory1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[19px] items-center relative shrink-0 w-full" data-name="Header">
      <IconHistory />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Recents</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Header1 />
      </div>
    </div>
  );
}

function IconProcedure1() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="1.10564" x2="7.53375" y1="9.021" y2="1.16441" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5269" x2="17.7889" y1="9.02904" y2="2.26364" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5612" x2="8.27575" y1="7.43655" y2="3.15114" />
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

function Frame1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[6px] items-center min-h-px min-w-px relative">
      <IconProcedure />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Procedure Name `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">➔</span>
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] text-[#7f7f7f]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">in Project Name</span>
        </p>
      </div>
    </div>
  );
}

function RecentItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function IconProcedure3() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="1.10564" x2="7.53375" y1="9.021" y2="1.16441" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5269" x2="17.7889" y1="9.02904" y2="2.26364" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5612" x2="8.27575" y1="7.43655" y2="3.15114" />
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

function Frame2() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[6px] items-center min-h-px min-w-px relative">
      <IconProcedure2 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Procedure Name `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">➔</span>
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] text-[#7f7f7f]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">in Project Name</span>
        </p>
      </div>
    </div>
  );
}

function RecentItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function IconProcedure5() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="1.10564" x2="7.53375" y1="9.021" y2="1.16441" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5269" x2="17.7889" y1="9.02904" y2="2.26364" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5612" x2="8.27575" y1="7.43655" y2="3.15114" />
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

function Frame3() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[6px] items-center min-h-px min-w-px relative">
      <IconProcedure4 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Procedure Name `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">➔</span>
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] text-[#7f7f7f]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">in Project Name</span>
        </p>
      </div>
    </div>
  );
}

function RecentItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function IconProcedure7() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="1.10564" x2="7.53375" y1="9.021" y2="1.16441" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5269" x2="17.7889" y1="9.02904" y2="2.26364" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5612" x2="8.27575" y1="7.43655" y2="3.15114" />
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

function Frame4() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[6px] items-center min-h-px min-w-px relative">
      <IconProcedure6 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Procedure Name `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">➔</span>
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] text-[#7f7f7f]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">in Project Name</span>
        </p>
      </div>
    </div>
  );
}

function RecentItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function IconProcedure9() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7132">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="1.10564" x2="7.53375" y1="9.021" y2="1.16441" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5269" x2="17.7889" y1="9.02904" y2="2.26364" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" strokeWidth="0.833333" x1="12.5612" x2="8.27575" y1="7.43655" y2="3.15114" />
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

function Frame5() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[6px] items-center min-h-px min-w-px relative">
      <IconProcedure8 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Procedure Name `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">➔</span>
          <span className="font-['Open_Sans:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] text-[#7f7f7f]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
          <span className="leading-[normal] text-[#7f7f7f]">in Project Name</span>
        </p>
      </div>
    </div>
  );
}

function RecentItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Chgangelist() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Chgangelist">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-px items-start px-[16px] py-[12px] relative size-full">
          <RecentItem />
          <RecentItem1 />
          <RecentItem2 />
          <RecentItem3 />
          <RecentItem4 />
        </div>
      </div>
    </div>
  );
}

function ItemChangelogPanel() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative rounded-[10px]" data-name="Item Changelog Panel">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Top />
      <Chgangelist />
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

function Header2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[19px] items-center relative shrink-0 w-full" data-name="Header">
      <IconCalendar />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Your Upcoming Meetings</p>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Header2 />
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

function ItemChangelogPanel1() {
  return (
    <div className="bg-white h-full relative rounded-[10px] shrink-0 w-[552px]" data-name="Item Changelog Panel">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Top1 />
        <NoScheduledMeetingsIndicator />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
        <ItemChangelogPanel />
        <ItemChangelogPanel1 />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] size-full" data-name="Home Page">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Title />
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}