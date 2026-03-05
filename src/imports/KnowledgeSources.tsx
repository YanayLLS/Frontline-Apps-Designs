import svgPaths from "./svg-9ja6ioywp2";

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

function KnowledgeSourceHeader() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Knowledge Source Header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Knowledge Sources</p>
          </div>
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

function Frame() {
  return (
    <div className="bg-[#d9e0f0] content-stretch flex h-[32px] items-center justify-between px-[12px] relative rounded-[10px] shrink-0 w-[228px]">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Search...
      </p>
      <IconSearch />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center p-[6px] relative rounded-[10px] shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Filter</p>
      </div>
    </div>
  );
}

function CreateGroupItem() {
  return (
    <div className="content-stretch flex h-[30px] items-center max-h-[58px] overflow-clip p-[6px] relative rounded-[10px] shrink-0" data-name="Create Group Item">
      <IconFilter />
      <Frame1 />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="spacer" />;
}

function IconTextButton() {
  return (
    <div className="bg-[#2f80ed] content-stretch flex h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[25px] shrink-0" data-name="Icon & textButton">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Upload files
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-end px-[9px] py-[8px] relative w-full">
          <Frame />
          <CreateGroupItem />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Spacer />
          </div>
          <IconTextButton />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[10px] h-[22px] items-center relative shrink-0 w-[236px]" data-name="Name">
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
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[85px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[79px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Expose File
      </p>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[90px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Location
      </p>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[84px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Roles
      </p>
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[103px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Created by
      </p>
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[80px]" data-name="Name">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Last modified
      </p>
    </div>
  );
}

function PlaceHolder() {
  return <div className="h-[22px] shrink-0 w-[24px]" data-name="Place holder" />;
}

function Titles() {
  return (
    <div className="relative shrink-0" data-name="Titles">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit]">
        <Name />
        <Name1 />
        <Name2 />
        <Name3 />
        <Name4 />
        <Name5 />
        <Name6 />
        <PlaceHolder />
      </div>
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox />
    </div>
  );
}

function IconDownload() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">report.docx</p>
      </div>
      <IconDownload />
    </div>
  );
}

function Published() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published />
    </div>
  );
}

function ExposeFileOption() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption />
    </div>
  );
}

function AgentLocationButton() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Confidential</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Alice Smith</p>
      </div>
    </div>
  );
}

function LastActive() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">June 1</p>
      </div>
    </div>
  );
}

function Spacer1() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField />
          <FileNameField />
          <Frame3 />
          <Frame4 />
          <AgentLocationButton />
          <SelectedRoleTitle />
          <Email />
          <LastActive />
          <Spacer1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField1() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox1 />
    </div>
  );
}

function IconDownload1() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">archive.zip</p>
      </div>
      <IconDownload1 />
    </div>
  );
}

function Published1() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published1 />
    </div>
  );
}

function ExposeFileOption1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption1 />
    </div>
  );
}

function AgentLocationButton1() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Historical</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Ethan Hunt</p>
      </div>
    </div>
  );
}

function LastActive1() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">October 20</p>
      </div>
    </div>
  );
}

function Spacer2() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem1() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField1 />
          <FileNameField1 />
          <Frame5 />
          <Frame6 />
          <AgentLocationButton1 />
          <SelectedRoleTitle1 />
          <Email1 />
          <LastActive1 />
          <Spacer2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField2() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox2 />
    </div>
  );
}

function IconDownload2() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">presentation.pptx</p>
      </div>
      <IconDownload2 />
    </div>
  );
}

function Published2() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published2 />
    </div>
  );
}

function ExposeFileOption2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption2 />
    </div>
  );
}

function AgentLocationButton2() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Internal</p>
      </div>
    </div>
  );
}

function Email2() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Bob Johnson</p>
      </div>
    </div>
  );
}

function LastActive2() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">July 15</p>
      </div>
    </div>
  );
}

function Spacer3() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem2() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField2 />
          <FileNameField2 />
          <Frame7 />
          <Frame8 />
          <AgentLocationButton2 />
          <SelectedRoleTitle2 />
          <Email2 />
          <LastActive2 />
          <Spacer3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField3() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox3 />
    </div>
  );
}

function IconDownload3() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">guidelines.docx</p>
      </div>
      <IconDownload3 />
    </div>
  );
}

function Published3() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published3 />
    </div>
  );
}

function ExposeFileOption3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption3 />
    </div>
  );
}

function AgentLocationButton3() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle3() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Public</p>
      </div>
    </div>
  );
}

function Email3() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Fiona Gallagher</p>
      </div>
    </div>
  );
}

function LastActive3() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">November 12</p>
      </div>
    </div>
  );
}

function Spacer4() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem3() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField3 />
          <FileNameField3 />
          <Frame9 />
          <Frame10 />
          <AgentLocationButton3 />
          <SelectedRoleTitle3 />
          <Email3 />
          <LastActive3 />
          <Spacer4 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField4() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox4 />
    </div>
  );
}

function IconDownload4() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">design_sketch.ai</p>
      </div>
      <IconDownload4 />
    </div>
  );
}

function Published4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Disabled
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published4 />
    </div>
  );
}

function ExposeFileOption4() {
  return <div className="h-[28px] shrink-0 w-[25px]" data-name="Expose File Option" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption4 />
    </div>
  );
}

function AgentLocationButton4() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle4() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Design</p>
      </div>
    </div>
  );
}

function Email4() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Charlie Green</p>
      </div>
    </div>
  );
}

function LastActive4() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">August 10</p>
      </div>
    </div>
  );
}

function Spacer5() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem4() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField4 />
          <FileNameField4 />
          <Frame11 />
          <Frame12 />
          <AgentLocationButton4 />
          <SelectedRoleTitle4 />
          <Email4 />
          <LastActive4 />
          <Spacer5 />
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField5() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox5 />
    </div>
  );
}

function IconDownload5() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">mockup.png</p>
      </div>
      <IconDownload5 />
    </div>
  );
}

function Published5() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published5 />
    </div>
  );
}

function ExposeFileOption5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption5 />
    </div>
  );
}

function AgentLocationButton5() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle5() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">UI</p>
      </div>
    </div>
  );
}

function Email5() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Gabe Newell</p>
      </div>
    </div>
  );
}

function LastActive5() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">December 18</p>
      </div>
    </div>
  );
}

function Spacer6() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem5() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField5 />
          <FileNameField5 />
          <Frame13 />
          <Frame14 />
          <AgentLocationButton5 />
          <SelectedRoleTitle5 />
          <Email5 />
          <LastActive5 />
          <Spacer6 />
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField6() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox6 />
    </div>
  );
}

function IconDownload6() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">video_tutorial.mp4</p>
      </div>
      <IconDownload6 />
    </div>
  );
}

function Published6() {
  return (
    <div className="absolute bg-[#ebf9f1] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1f9254] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enabled
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published6 />
    </div>
  );
}

function ExposeFileOption6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[25px]" data-name="Expose File Option">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
        <g id="Expose File Option">
          <path d={svgPaths.p17f2f680} fill="var(--fill-0, #FF1F1F)" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption6 />
    </div>
  );
}

function AgentLocationButton6() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle6() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Training</p>
      </div>
    </div>
  );
}

function Email6() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Hannah Baker</p>
      </div>
    </div>
  );
}

function LastActive6() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">January 25</p>
      </div>
    </div>
  );
}

function Spacer7() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem6() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField6 />
          <FileNameField6 />
          <Frame15 />
          <Frame16 />
          <AgentLocationButton6 />
          <SelectedRoleTitle6 />
          <Email6 />
          <LastActive6 />
          <Spacer7 />
        </div>
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function CheckboxField7() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[35px]" data-name="checkbox field">
      <Checkbox7 />
    </div>
  );
}

function IconDownload7() {
  return <div className="shrink-0 size-[16px]" data-name="Icon/Download" />;
}

function FileNameField7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center p-[6px] relative shrink-0 w-[199px]" data-name="File Name Field">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">spreadsheet.xlsx</p>
      </div>
      <IconDownload7 />
    </div>
  );
}

function Published7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center left-0 px-[12px] py-[8px] rounded-[22px] top-0 w-[73px]" data-name="Published">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#36415d] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Disabled
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[98px]">
      <Published7 />
    </div>
  );
}

function ExposeFileOption7() {
  return <div className="h-[28px] shrink-0 w-[25px]" data-name="Expose File Option" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[81px]">
      <ExposeFileOption7 />
    </div>
  );
}

function AgentLocationButton7() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative shrink-0 w-[105px]" data-name="Agent Location Button">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Workspace</p>
      </div>
    </div>
  );
}

function SelectedRoleTitle7() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center overflow-clip p-[4px] relative rounded-[10px] shrink-0 w-[99px]" data-name="Selected Role Title">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Finance</p>
      </div>
    </div>
  );
}

function Email7() {
  return (
    <div className="content-stretch flex h-[20px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[111px]" data-name="email">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Diana Prince</p>
      </div>
    </div>
  );
}

function LastActive7() {
  return (
    <div className="content-stretch flex h-[36px] items-center max-h-[58px] overflow-clip relative rounded-[10px] shrink-0 w-[90px]" data-name="last active">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] max-h-[38px] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">September 5</p>
      </div>
    </div>
  );
}

function Spacer8() {
  return <div className="h-full shrink-0 w-px" data-name="Spacer" />;
}

function FileReferenceItem7() {
  return (
    <div className="h-[40px] mb-[-1px] relative shrink-0 w-full" data-name="File Reference Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
          <CheckboxField7 />
          <FileNameField7 />
          <Frame17 />
          <Frame18 />
          <AgentLocationButton7 />
          <SelectedRoleTitle7 />
          <Email7 />
          <LastActive7 />
          <Spacer8 />
        </div>
      </div>
    </div>
  );
}

function FilesList1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto pb-px relative shrink-0" data-name="Files list">
      <FileReferenceItem />
      <FileReferenceItem1 />
      <FileReferenceItem2 />
      <FileReferenceItem3 />
      <FileReferenceItem4 />
      <FileReferenceItem5 />
      <FileReferenceItem6 />
      <FileReferenceItem7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative w-full">
      <Titles />
      <FilesList1 />
    </div>
  );
}

function IconEscape3() {
  return (
    <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Icon/Escape">
          <path d={svgPaths.p2dc32500} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape2() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Icon/Escape">
      <IconEscape3 />
    </button>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[8px] py-[4px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-[113px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">5 items selected</p>
      </div>
      <IconEscape2 />
    </div>
  );
}

function Frame22() {
  return <div className="h-[5px] shrink-0 w-px" />;
}

function Frame23() {
  return <div className="h-full shrink-0 w-[59px]" />;
}

function RoleOption() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center px-[10px] py-[6px] relative rounded-[10px] shrink-0" data-name="Role Option">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Specify roles</p>
      </div>
    </div>
  );
}

function RoleOption1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center px-[10px] py-[6px] relative rounded-[10px] shrink-0" data-name="Role Option">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Enable</p>
      </div>
    </div>
  );
}

function RoleOption2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center px-[10px] py-[6px] relative rounded-[10px] shrink-0" data-name="Role Option">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Disable</p>
      </div>
    </div>
  );
}

function RoleOption3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center px-[10px] py-[6px] relative rounded-[10px] shrink-0" data-name="Role Option">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Expose</p>
      </div>
    </div>
  );
}

function IconTrash() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon/Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/Trash">
          <path clipRule="evenodd" d={svgPaths.p9873f00} fill="var(--fill-0, #FF1F1F)" fillRule="evenodd" id="Icon/Trash_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="aspect-[24/24] h-full overflow-clip relative shrink-0">
      <IconTrash />
    </div>
  );
}

function SelectedMembersActionsMenu() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0" data-name="Selected Members Actions Menu">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-row items-center self-stretch">
          <Frame19 />
        </div>
        <Frame22 />
        <div className="flex flex-row items-center self-stretch">
          <Frame23 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <RoleOption />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <RoleOption1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <RoleOption2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <RoleOption3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Frame20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_21.2px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function FilesList() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Files List">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[20px] relative size-full">
          <Frame21 />
          <Frame2 />
          <SelectedMembersActionsMenu />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Content">
      <FilesList />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Body">
      <Content />
    </div>
  );
}

function DeleteButton() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[6px] h-[35px] items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[73px]" data-name="Delete button">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#36415d] text-[10px] text-left" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Discard
      </p>
    </button>
  );
}

function Frame24() {
  return <div className="flex-[1_0_0] h-[17px] min-h-px min-w-px" />;
}

function Test() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[10px] shrink-0" data-name="test">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Test</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-[#2f80ed] content-stretch cursor-pointer flex items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[75px]" data-name="Primary button">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-left text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Publish
      </p>
    </button>
  );
}

function Footer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end p-[8px] relative size-full">
          <DeleteButton />
          <Frame24 />
          <Test />
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeSources() {
  return (
    <div className="bg-white relative size-full" data-name="Knowledge Sources">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <KnowledgeSourceHeader />
        <Body />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}