import svgPaths from "./svg-h2pvef5mth";

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

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Create Meeting</p>
      </div>
      <EscapeButton />
    </div>
  );
}

function FrontlineSearchInputField() {
  return (
    <div className="bg-[#c2c9db] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Frontline Search Input Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-hidden">Meeting with Host Name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e80ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
      <FrontlineSearchInputField />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#2f80ed] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Primary button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Schedule for later
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="bg-[#2f80ed] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Primary button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Start meeting now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <PrimaryButton />
      <PrimaryButton1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function RemoteSupportCreateMeetingMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center p-[12px] relative rounded-[10px] size-full" data-name="Remote Support Create Meeting Menu">
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_51.9px_0px_rgba(0,0,0,0.25)]" />
      <Frame />
      <Frame1 />
    </div>
  );
}