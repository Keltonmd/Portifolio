import React, { useEffect, useState, Children } from "react";
import type { PropsWithChildren } from "react";

interface FadeInProps {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: React.ElementType;
  childTag?: React.ElementType;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

export default function FadeIn({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  className,
  childClassName,
  visible = true,
  onComplete,
  children,
}: PropsWithChildren<FadeInProps>) {
  const [maxVisible, setMaxVisible] = useState(0);

  const totalChildren = Children.count(children);
  const targetVisible = visible ? totalChildren : 0;

  useEffect(() => {
    // Quando terminar a animação
    if (maxVisible === targetVisible) {
      if (onComplete) {
        const timeout = setTimeout(onComplete, transitionDuration);
        return () => clearTimeout(timeout);
      }
      return;
    }

    const step = targetVisible > maxVisible ? 1 : -1;

    const timeout = setTimeout(() => {
      setMaxVisible((v) => v + step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [maxVisible, targetVisible, delay, transitionDuration, onComplete]);

  return (
    <WrapperTag className={className}>
      {Children.map(children, (child, index) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            opacity: maxVisible > index ? 1 : 0,
            transform: maxVisible > index ? "translateY(0px)" : "translateY(20px)",
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
