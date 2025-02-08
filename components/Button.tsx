"use client";

interface ButtonSchema {
  text: string;
  style: string;
  handler: () => void;
}

export default function Button({ text, style, handler }: ButtonSchema) {
  return (
    <button className={style} onClick={handler}>
      {text}
    </button>
  );
}
