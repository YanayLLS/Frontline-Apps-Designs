import svgPaths from "./svg-0y0pillmc3";

function Frame3() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" />;
}

function IconEscape1() {
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

function IconEscape() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon/Escape" role="button" tabIndex="0">
      <IconEscape1 />
    </div>
  );
}

function Frame1() {
  return (
    <button className="block cursor-pointer overflow-clip relative shrink-0 size-[32px]">
      <IconEscape />
    </button>
  );
}

function ChatHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Chat Header">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <Frame1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#36415d] text-[18px] text-center top-[calc(50%-0.5px)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Test Agent</p>
      </div>
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
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Icon/Escape">
      <IconEscape3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <IconEscape2 />
    </div>
  );
}

function TestingModeDisclaimer() {
  return (
    <div className="bg-[#e9e9e9] relative rounded-[10px] shrink-0 w-full" data-name="Testing mode disclaimer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#36415d] text-[12px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Testing mode uses unpublished files and does not change your data.
          </p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Messages">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[8px] relative size-full">
          <ChatHeader />
          <TestingModeDisclaimer />
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
          <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] overflow-hidden text-[#36415d] text-[14px] text-ellipsis text-left top-[calc(50%+0.5px)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] min-h-px min-w-px place-items-start relative" data-name="Prompt row">
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

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[5px] h-[36px] items-center ml-0 mt-0 overflow-clip relative row-1 w-[285px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2f80ed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]" dir="auto">
          Project name
        </p>
      </div>
    </div>
  );
}

function BradCrumbs() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] min-h-px min-w-px place-items-start relative" data-name="brad crumbs">
      <Frame />
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

function IconButtonInvert() {
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

function IconButtonInvert1() {
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
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#36415d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[normal]">Context:</p>
          </div>
          <BradCrumbs />
          <IconButtonInvert />
          <IconButtonInvert1 />
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
    <div className="bg-white content-stretch flex h-[702px] items-start relative rounded-[10px] shrink-0 w-[463px]" data-name="Chat window">
      <div aria-hidden="true" className="absolute border border-[#5b19b4] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_4px_99.8px_0px_rgba(14,122,254,0.5)]" />
      <Chat />
    </div>
  );
}

export default function ChatForTesting() {
  return (
    <div className="content-stretch flex items-center p-px relative rounded-bl-[25px] rounded-tl-[25px] rounded-tr-[25px] shadow-[0px_4px_17.7px_0px_rgba(0,0,0,0.25)] size-full" data-name="Chat for Testing">
      <ChatWindow />
    </div>
  );
}