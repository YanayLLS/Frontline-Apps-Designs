import svgPaths from "./svg-52an9imbwk";
import imgThumbnail from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[5px] items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Project name</p>
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="brad crumbs">
      <Frame />
    </div>
  );
}

function Frame1() {
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

function BradCrumbs1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="brad crumbs">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Current Folder</p>
      </div>
    </div>
  );
}

function BradCrumbs2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="brad crumbs">
      <Frame2 />
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#c2c9db] h-full shrink-0 w-px" />;
}

function Frame3() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 overflow-clip relative row-1">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">+ 2 more</p>
      </div>
    </div>
  );
}

function BradCrumbs3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="brad crumbs">
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#c2c9db] h-full shrink-0 w-px" />;
}

function IconLeave() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Icon/Leave">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon/Leave">
          <path clipRule="evenodd" d={svgPaths.p3a681c40} fill="var(--fill-0, #36415D)" fillRule="evenodd" id="Icon/Leave_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]">
      <IconLeave />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-[971px]">
      <BradCrumbs />
      <BradCrumbs1 />
      <BradCrumbs2 />
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <BradCrumbs3 />
      <div className="flex flex-row items-center self-stretch">
        <Frame12 />
      </div>
      <Frame6 />
    </div>
  );
}

function BreadCrumbs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px overflow-clip relative" data-name="Bread crumbs">
      <Frame9 />
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

function IconShare() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon/Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon/Share">
          <path d={svgPaths.p34dc7280} fill="var(--fill-0, #2F80ED)" id="share" />
        </g>
      </svg>
    </div>
  );
}

function EditButton() {
  return (
    <div className="h-[28px] relative rounded-[10px] shrink-0" data-name="edit button">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[6px] relative rounded-[inherit]">
        <IconShare />
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Share
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function IconEscape1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/Escape">
          <path d={svgPaths.p2aa77200} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Icon/Escape">
      <IconEscape1 />
    </button>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end p-[12px] relative w-full">
          <BreadCrumbs />
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <IconMore />
            </div>
          </div>
          <EditButton />
          <IconEscape />
        </div>
      </div>
    </div>
  );
}

function IconProcedure1() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12.8559">
        <g id="ð¹ Icon/Procedure">
          <line id="Line 10" stroke="var(--stroke-0, #36415D)" x1="1.32677" x2="9.04051" y1="10.8252" y2="1.39729" />
          <line id="Line 13" stroke="var(--stroke-0, #36415D)" x1="15.0323" x2="21.3466" y1="10.8348" y2="2.71637" />
          <line id="Line 11" stroke="var(--stroke-0, #36415D)" x1="15.0734" x2="9.9309" y1="8.92386" y2="3.78137" />
          <circle cx="2.14271" cy="10.7131" fill="var(--fill-0, #36415D)" id="Ellipse 18" r="2.14271" />
          <circle cx="15.8601" cy="9.85572" fill="var(--fill-0, #36415D)" id="Ellipse 20" r="2.14271" />
          <circle cx="8.13939" cy="2.99987" fill="var(--fill-0, #36415D)" id="Ellipse 19" r="2.14271" />
          <circle cx="21.8573" cy="2.14271" fill="var(--fill-0, #36415D)" id="Ellipse 21" r="2.14271" />
        </g>
      </svg>
    </div>
  );
}

function IconProcedure() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Procedure">
      <IconProcedure1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[16px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Fixing the battery</p>
      </div>
    </div>
  );
}

function SecondaryInputfield() {
  return (
    <div className="flex-[1_0_0] h-[35px] min-h-px min-w-px relative rounded-[10px]" data-name="Secondary Inputfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex h-[35px] items-start relative shrink-0 w-[444px]" data-name="title">
      <SecondaryInputfield />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="spacer" />;
}

function EditsPendingHolder() {
  return (
    <div className="bg-[rgba(255,31,31,0.3)] h-full relative rounded-[10px] shrink-0" data-name="edits pending holder">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-[5px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Unpublished changes</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ff1f1f] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NotPublishedHolder() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#36415d] text-right" data-name="Not published holder">
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] text-[12px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Published
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Version 1.5 at 12/02/2022</p>
      </div>
    </div>
  );
}

function SuccessButton() {
  return (
    <div className="bg-[#11e874] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0" data-name="Success button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Publish
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <IconProcedure />
          <Title />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Spacer />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <EditsPendingHolder />
          </div>
          <NotPublishedHolder />
          <SuccessButton />
        </div>
      </div>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="content-stretch flex items-start max-h-[100px] relative shrink-0 w-full" data-name="Project title">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden" dir="auto">
          Preview
        </p>
      </div>
    </div>
  );
}

function LinkButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[5px] shrink-0" data-name="Link Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` preview in 2D`}</p>
    </div>
  );
}

function ProjectTitle1() {
  return (
    <div className="content-stretch flex items-center max-h-[100px] relative shrink-0 w-full" data-name="Project title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">{`Preview a connected digital twin, or `}</p>
      </div>
      <LinkButton />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ProjectTitle />
      <ProjectTitle1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function DropdownField() {
  return (
    <div className="bg-white content-stretch flex gap-[13px] items-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[243px]" data-name="Dropdown field">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Select a digital twin</p>
      </div>
      <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
          <path d={svgPaths.p17e01100} fill="var(--fill-0, #36415D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function TopFrame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Top frame">
      <Frame10 />
      <DropdownField />
    </div>
  );
}

function IconPlay1() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[15/22.316965103149414] left-[33.33%] right-[29.17%] top-[calc(50%+0.25px)]" data-name="Icon/Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 22.317">
        <g id="Icon/Play">
          <path d={svgPaths.pc875800} fill="var(--fill-0, white)" id="play_arrow" />
        </g>
      </svg>
    </div>
  );
}

function IconPlay() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.39)] left-1/2 rounded-[100px] size-[40px] top-[calc(50%-0.72px)]" data-name="Icon/Play">
      <IconPlay1 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-0.72px)]">
      <IconPlay />
    </div>
  );
}

function Component3D() {
  return (
    <div className="aspect-[1920/1080] bg-gradient-to-b from-[#5b19b4] overflow-clip relative rounded-[10px] size-full to-[#004fff]" data-name="3D">
      <Group />
    </div>
  );
}

function EditButton1() {
  return (
    <button className="bg-[#2f80ed] cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="edit button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[9px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-left text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Edit in app
          </p>
          <div className="relative shrink-0 size-[12.237px]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5969 13.5969">
                <path d={svgPaths.p1ab25080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35969" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="action buttons">
      <EditButton1 />
    </div>
  );
}

function EditButton2() {
  return (
    <div className="bg-[#2f80ed] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="edit button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[18px] py-[9px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Edit in canvas
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionButtons1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="action buttons">
      <EditButton2 />
    </div>
  );
}

function ProceduresActionsHolder() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="procedures actions holder">
      <ActionButtons />
      <ActionButtons1 />
    </div>
  );
}

function EditSettings() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Edit settings">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[10px] relative w-full">
        <TopFrame />
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <Component3D />
          </div>
        </div>
        <ProceduresActionsHolder />
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="aspect-[192/108] relative rounded-[10px] shrink-0 w-full" data-name="Thumbnail">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgThumbnail} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[123px]">
      <Thumbnail />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px overflow-clip relative">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px overflow-hidden relative text-[#7f7f7f] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Write a description (optional)...
      </p>
    </div>
  );
}

function SecondaryInputfield1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Secondary Inputfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[6px] relative size-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[70px] items-start min-h-px min-w-px relative" data-name="Description">
      <SecondaryInputfield1 />
    </div>
  );
}

function Data() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Data">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center p-[10px] relative w-full">
          <Frame4 />
          <Description />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start max-w-[1000px] min-h-px min-w-px relative" data-name="Body">
      <EditSettings />
      <Data />
    </div>
  );
}

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
        <p className="leading-[normal] overflow-hidden">Settings</p>
      </div>
    </div>
  );
}

function AdvancedItemSettings() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Advanced Item Settings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start p-[10px] relative w-full">
          <Header />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function IconChevron1() {
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

function IconChevronCollapsed1() {
  return (
    <div className="relative rounded-[1.5px] shrink-0 size-[12px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[19px] items-center relative shrink-0 w-[380px]" data-name="Header">
      <IconChevronCollapsed1 />
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Version History</p>
      </div>
    </div>
  );
}

function PublishSettings() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Publish settings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
          <Header1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SideMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[400px]" data-name="Side menu">
      <AdvancedItemSettings />
      <PublishSettings />
    </div>
  );
}

function Horizontal() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Horizontal">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-start flex flex-wrap gap-[12px] items-start px-px relative size-full">
          <Body />
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <button className="bg-[#2f80ed] content-stretch cursor-pointer flex items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[142px]" data-name="action button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">No digital twin</p>
      </div>
    </button>
  );
}

function ActionButton1() {
  return (
    <button className="bg-[#2f80ed] content-stretch cursor-pointer flex items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[142px]" data-name="action button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Not published</p>
      </div>
    </button>
  );
}

function ActionButton2() {
  return (
    <button className="bg-[#2f80ed] content-stretch cursor-pointer flex items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[142px]" data-name="action button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Not edited yet</p>
      </div>
    </button>
  );
}

function ActionButton3() {
  return (
    <button className="bg-[#2f80ed] cursor-pointer relative rounded-[10px] shrink-0 w-full" data-name="action button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Is admin</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function ElementSelectionPanel() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.74)] bottom-[12px] content-stretch flex flex-col gap-[6px] items-center opacity-20 overflow-clip p-[6px] right-[11px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[162px]" data-name="Element selection panel">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Debug</p>
      </div>
      <ActionButton />
      <ActionButton1 />
      <ActionButton2 />
      <ActionButton3 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
          <Horizontal />
          <ElementSelectionPanel />
        </div>
      </div>
    </div>
  );
}

function KnowledgeBaseProcedureSettingsPage() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Knowledge Base Procedure Settings Page">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame5 />
        <Footer />
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function KnowledgeBasteProcedurePage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] size-full" data-name="Knowledge Baste Procedure Page">
      <KnowledgeBaseProcedureSettingsPage />
    </div>
  );
}