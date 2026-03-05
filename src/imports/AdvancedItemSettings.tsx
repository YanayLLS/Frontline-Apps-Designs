import svgPaths from "./svg-ia9jqi8ikt";

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

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group />
    </div>
  );
}

function IconAttention1() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention1 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention />
    </div>
  );
}

function AppTooltip() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton />
      <AppTooltip />
    </div>
  );
}

function Date() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Auto narrate header</p>
          </div>
          <InfoButton />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group1 />
    </div>
  );
}

function IconAttention3() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention3 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention2 />
    </div>
  );
}

function AppTooltip1() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton1 />
      <AppTooltip1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Auto narrate description</p>
          </div>
          <InfoButton1 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date1 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group2 />
    </div>
  );
}

function IconAttention5() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention5 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention4 />
    </div>
  );
}

function AppTooltip2() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton2 />
      <AppTooltip2 />
    </div>
  );
}

function Date2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Wait for text to speech completion before next step</p>
          </div>
          <InfoButton2 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date2 />
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-[#c2c9db] h-px shrink-0 w-full" data-name="divider" />;
}

function Group3() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group3 />
    </div>
  );
}

function IconAttention7() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention7 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention6 />
    </div>
  );
}

function AppTooltip3() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton3 />
      <AppTooltip3 />
    </div>
  );
}

function Date3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Allow 2D viewing</p>
          </div>
          <InfoButton3 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox3 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date3 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group4 />
    </div>
  );
}

function IconAttention9() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention9 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention8 />
    </div>
  );
}

function AppTooltip4() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton4 />
      <AppTooltip4 />
    </div>
  );
}

function Date4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Toggle step advancement on option selection</p>
          </div>
          <InfoButton4 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date4 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group5 />
    </div>
  );
}

function IconAttention11() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention11 />
    </div>
  );
}

function IconButton5() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention10 />
    </div>
  );
}

function AppTooltip5() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton5 />
      <AppTooltip5 />
    </div>
  );
}

function Date5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Allow skipping steps</p>
          </div>
          <InfoButton5 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox5 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date5 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-1/4 left-[15%] right-[15%] top-1/4">
      <div className="absolute inset-[-7.07%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 11.7778">
          <g id="Group 53">
            <line id="Line 5" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="4.01109" x2="15.0111" y1="11.3889" y2="0.388909" />
            <line id="Line 6" stroke="var(--stroke-0, #36415D)" strokeWidth="1.1" x1="0.388909" x2="4.78891" y1="6.98891" y2="11.3889" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Checkbox">
      <div className="absolute bg-white border-[#d9e0f0] border-[1.467px] border-solid inset-0 rounded-[7.333px]" data-name="Outline" />
      <Group6 />
    </div>
  );
}

function IconAttention13() {
  return (
    <div className="absolute inset-[10.84%_12.5%_14.16%_12.5%]" data-name="Icon/Attention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon/Attention">
          <path d={svgPaths.pb97e6c0} fill="var(--fill-0, #36415D)" id="error" />
        </g>
      </svg>
    </div>
  );
}

function IconAttention12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/Attention">
      <IconAttention13 />
    </div>
  );
}

function IconButton6() {
  return (
    <div className="bg-[rgba(47,128,237,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon button">
      <IconAttention12 />
    </div>
  );
}

function AppTooltip6() {
  return (
    <div className="absolute bg-[#36415d] content-stretch flex flex-col items-start left-[-60.3px] opacity-0 p-[3px] rounded-[6px] shadow-[7.8px_6px_11.1px_0px_rgba(0,0,0,0.15)] top-[-20.72px]" data-name="App tooltip">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10.8px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        This tooltip will show in app
      </p>
    </div>
  );
}

function InfoButton6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Info Button">
      <IconButton6 />
      <AppTooltip6 />
    </div>
  );
}

function Date6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#36415d] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre-wrap">Show survey</p>
          </div>
          <InfoButton6 />
        </div>
      </div>
    </div>
  );
}

function SettingOptionItem6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-[380px]" data-name="Setting Option Item">
      <Checkbox6 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Date6 />
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#c2c9db] h-px shrink-0 w-full" data-name="divider" />;
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-ellipsis w-full whitespace-nowrap">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="overflow-hidden text-[14px]">
          <span className="leading-[normal]">{`AI Instructions `}</span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            (optional)
          </span>
        </p>
      </div>
      <div className="bg-clip-text bg-gradient-to-b flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal from-[#5b19b4] justify-center overflow-hidden relative shrink-0 text-[12px] text-right to-[#004fff]" style={{ fontVariationSettings: "'wdth' 100", WebkitTextFillColor: "transparent" }}>
        <p className="leading-[normal] overflow-hidden">Summarize with AI</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px overflow-clip relative">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px overflow-hidden relative text-[#36415d] text-[12px] text-ellipsis whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Meet the ProBook, an innovative laptop crafted for professionals who seek both power and sophistication. Its sleek metal design and ultra-slim form factor merge style with practicality. Powered by the latest Intel processors, it delivers rapid performance and efficiency for multitasking and intensive applications. The brilliant 15.6-inch screen provides breathtaking visuals, ideal for presentations or creative projects. Additionally, with an impressive battery life, you can remain productive throughout the day without the hassle of frequent charging. Enjoy effortless connectivity with cutting-edge Wi-Fi technology and a variety of ports for all your gadgets. The ProBook is more than just a laptop; it's your essential tool for productivity.`}</p>
    </div>
  );
}

function SecondaryInputfield() {
  return (
    <div className="h-[72px] relative rounded-[10px] shrink-0 w-full" data-name="Secondary Inputfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[6px] relative size-full">
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function AiInstructions() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="AI Instructions">
      <Frame />
      <SecondaryInputfield />
    </div>
  );
}

function ProcedureSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Procedure Settings">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#36415d] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Text to speech</p>
      </div>
      <SettingOptionItem />
      <SettingOptionItem1 />
      <SettingOptionItem2 />
      <Divider />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#36415d] text-[10px] text-ellipsis w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Logics</p>
      </div>
      <SettingOptionItem3 />
      <SettingOptionItem4 />
      <SettingOptionItem5 />
      <SettingOptionItem6 />
      <Divider1 />
      <AiInstructions />
    </div>
  );
}

export default function AdvancedItemSettings() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Advanced Item Settings">
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Header />
        <ProcedureSettings />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c2c9db] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}