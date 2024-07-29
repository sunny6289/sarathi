import { cva } from "class-variance-authority";
import React from "react";

const buttonVariant = cva(
  "flex relative items-center justify-center gap-[4px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-[8px]",
  {
    variants: {
      variant: {
        red: "bg-red-500 text-neutral-100",
        green: "bg-green-400 text-neutral-100",
        blue: "bg-blue-400 text-neutral-100", //this is to reject
        gray: "bg-slate-400 text-neutral-100", //this is to reject
      },
      size: {
        sm: "text-[14px] font-[400]",
        md: "text-[17px] font-[500]",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "sm",
    },
  }
);

function Button({ content, variant, size, className, ...props }) {
  const isAccept = variant === "accept";
  const isReject = variant === "reject";
  const isDisable = variant === "disable";
  isDisable ? props.disabled = true : props.disabled = false;
  if(isAccept || isReject) props = null;

  // Render accept or reject button with corresponding color (no work button showcase purpose only)
  if (isAccept || isReject) {
    return (
      <button
        className= {`${buttonVariant({ variant, size })} ${className} `}
        {...props}
      >
        <span
          className={`h-[8px] w-[8px] rounded-full ${
            isAccept ? "bg-[#0AC032]" : "bg-[#FF2E2E]"
          }`}
        ></span>
        {content}
      </button>
    );
  }

  return (
    <button
      className={`${className} ${buttonVariant({ variant, size })}`} 
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
