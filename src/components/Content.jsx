export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img className= "w-300px rounded-[10px] mb-[3px]"src={content.img} alt={content.title} />
      <span className="text-[12px] px-[ 4px 5px] 
      rounded-[3px] border-1 [#d7fa00] text-#d7fa00">모집중</span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-slate-rgb(160, 160, 160) ">{content.subtitle}</p>
    </div>
  );
}
