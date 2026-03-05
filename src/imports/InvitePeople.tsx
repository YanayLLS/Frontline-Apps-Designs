import svgPaths from "./svg-tgpqfs7jzl";

function IconEscape1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon/Escape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Icon/Escape">
          <path d={svgPaths.pbce2e00} fill="var(--fill-0, #36415D)" />
        </g>
      </svg>
    </div>
  );
}

function IconEscape() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[14px]" data-name="Icon/Escape">
      <IconEscape1 />
    </button>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#36415d] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">Invite people to meeting</p>
      </div>
      <IconEscape />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center p-[12px] relative shrink-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#36415d] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Copy and share the link to invite someone</p>
      </div>
    </div>
  );
}

function IconCopy1() {
  return (
    <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%]" data-name="Icon/Copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3333 13.3333">
        <g id="Icon/Copy">
          <path d={svgPaths.p323ac280} fill="var(--fill-0, #2F80ED)" id="content_copy" />
        </g>
      </svg>
    </div>
  );
}

function IconCopy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Copy">
      <IconCopy1 />
    </div>
  );
}

function IconTextButton() {
  return (
    <div className="relative rounded-[25px] shrink-0 w-full" data-name="Icon & textButton">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative w-full">
          <IconCopy />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Copy meeting link
          </p>
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
          <path d={svgPaths.p369d3080} fill="var(--fill-0, #2F80ED)" id="groups_2" />
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

function IconTextButton1() {
  return (
    <div className="relative rounded-[25px] shrink-0 w-full" data-name="Icon & textButton">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative w-full">
          <IconMultipleUsers />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Add workspace member
          </p>
        </div>
      </div>
    </div>
  );
}

function IconSend1() {
  return (
    <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%]" data-name="Icon/Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 10.6667">
        <g id="Icon/Send">
          <path d={svgPaths.p11af2f00} fill="var(--fill-0, #2F80ED)" id="send" />
        </g>
      </svg>
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Send">
      <IconSend1 />
    </div>
  );
}

function IconTextButton2() {
  return (
    <div className="relative rounded-[25px] shrink-0 w-full" data-name="Icon & textButton">
      <div aria-hidden="true" className="absolute border border-[#2f80ed] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative w-full">
          <IconSend />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2f80ed] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Share via default email
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#c2c9db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative w-full">
          <IconTextButton />
          <IconTextButton1 />
          <IconTextButton2 />
        </div>
      </div>
    </div>
  );
}

export default function InvitePeople() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Invite people">
      <Header />
      <Footer />
    </div>
  );
}