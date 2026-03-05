import svgPaths from "./svg-te8obw8rld";

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

function Frame4() {
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
          <Frame4 />
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[30px]">
      <IconNewFolder />
    </div>
  );
}

function Frame5() {
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

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center p-[12px] relative w-full">
          <IconProject />
          <BreadCrumbs />
          <Frame3 />
          <Frame5 />
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

function Frame2() {
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
      <Frame2 />
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

function Spacer() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer1() {
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
      <Spacer />
      <Spacer1 />
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

function IconChevron() {
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

function IconChevronCollapsed() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed">
      <IconChevron />
    </div>
  );
}

function Chevron() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed />
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

function Spacer2() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer3() {
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
      <Spacer2 />
      <Spacer3 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function Chevron1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed1 />
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

function Spacer4() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer5() {
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
      <Spacer4 />
      <Spacer5 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function Chevron2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed2 />
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

function Spacer6() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer7() {
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
      <Spacer6 />
      <Spacer7 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed3() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed3 />
    </div>
  );
}

function IconProcedure1() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer8() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer9() {
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
      <Spacer8 />
      <Spacer9 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed4() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed4 />
    </div>
  );
}

function IconProcedure3() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer10() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer11() {
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
      <Spacer10 />
      <Spacer11 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed5() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed5 />
    </div>
  );
}

function IconProcedure5() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer12() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer13() {
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
      <Spacer12 />
      <Spacer13 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed6() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed6 />
    </div>
  );
}

function IconProcedure7() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer14() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer15() {
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
      <Spacer14 />
      <Spacer15 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed7() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed7 />
    </div>
  );
}

function IconProcedure9() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer16() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer17() {
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
      <Spacer16 />
      <Spacer17 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed8() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed8 />
    </div>
  );
}

function IconProcedure11() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer18() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer19() {
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
      <Spacer18 />
      <Spacer19 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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

function IconChevronCollapsed9() {
  return <div className="rounded-[3px] shrink-0 size-[24.57px]" data-name="Icon/Chevron/Collapsed" />;
}

function Chevron9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="chevron">
      <IconChevronCollapsed9 />
    </div>
  );
}

function IconProcedure13() {
  return (
    <div className="absolute inset-[22.61%_0_23.83%_0]" data-name="🔹 Icon/Procedure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.7133">
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

function Spacer20() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function Spacer21() {
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
      <Spacer20 />
      <Spacer21 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1184.671875", "--transform-inner-height": "154.03125" } as React.CSSProperties}>
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="Knowledge Base Views">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
          <KnowledgeBaseHeaderDefault />
          <ItemsList />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <KnowledgeBaseViews />
      </div>
    </div>
  );
}

export default function KnowledgeBasePage() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Knowledge Base Page">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}