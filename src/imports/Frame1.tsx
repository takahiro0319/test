function Frame2() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[40px] py-0 relative shrink-0 w-[262px]">
      <div className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[41.2px] text-black">
        <p className="css-4hzbpn mb-0">カラムカラムカラムカラム</p>
        <p className="css-4hzbpn mb-0">カラムカラムカラムカラムカラム</p>
        <p className="css-4hzbpn mb-0">カラムカラムカラムカラム</p>
        <p className="css-4hzbpn">カラムカラムカラム</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[246px] items-center justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[71.2px] text-black text-center">中のコンテンツ22222</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
      <div className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[41.2px] text-black text-center">
        <p className="css-4hzbpn mb-0">小さい小さい小さい小さい</p>
        <p className="css-4hzbpn mb-0">小さい小さい小さい小さい小さい</p>
        <p className="css-4hzbpn">小さい小さい小さい小さい小さい</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#a19292] flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-full">
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}