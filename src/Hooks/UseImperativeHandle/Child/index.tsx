import React, {forwardRef, useImperativeHandle, useRef} from "react";

export type ImperativeHandleTypes = {
  setFocus(): void;
  disabledInput(): void;
  activateInput(): void;
}

export const Child = forwardRef<ImperativeHandleTypes>((props, ref) => {
  const inputRef = useRef({} as HTMLInputElement);

  useImperativeHandle(ref, () => {
    return {
      setFocus() {
          inputRef.current.focus();
      },
      disabledInput() {
        inputRef.current.disabled = true;
      },
      activateInput() {
        inputRef.current.disabled = false
      }
    };
  });

  return <input type="text" ref={inputRef} />
})
