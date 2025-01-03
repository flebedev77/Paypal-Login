import Image from "next/image";
import Link from "next/link";

function VerticalSeperator() {
  return <div className="border-l border-gray-300 w-0 h-5"></div>;
}

export default function LanguageBar() {
  return (
    <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 bottom-14 justify-center align-top w-max ">
      <Image
        src="/amerika.png"
        alt="Language Icon"
        width={22}
        height={16}
        style={{ width: 22 + "px", height: 16 + "px" }}
        className="my-1"
      />
      <div
        className="rotate-45 w-3 h-3 border-gray-900 border-b border-r my-1"
        style={{ width: 10 + "px", height: 10 + "px" }}
      ></div>
      <div className="p-0 m-0 font-thin text-sm flex align-center gap-2 text-gray-600">
        <Link href="#/" style={{ fontWeight: 900 }}>
          English
        </Link>{" "}
        <VerticalSeperator /> <Link href="#/">Français</Link>{" "}
        <VerticalSeperator /> <Link href="#/">Español</Link>{" "}
        <VerticalSeperator />{" "}
        <Link href="#/" className="font-normal">
          中文
        </Link>
      </div>
    </div>
  );
}
