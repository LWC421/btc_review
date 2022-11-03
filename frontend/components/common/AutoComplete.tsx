import { useInput } from "hooks";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import * as AutoCompleteSt from "./AutoComplete.style";
import Input, { Props as InputProps } from "./Input";

interface Props extends InputProps {
  items: Array<any>;
}

//참고 사이트
//https://velog.io/@hyejeong/Auto-CompleteReact-b7j9vwif
const AutoComplete = ({
  id,
  label,
  warning,
  warningMessage,
  items,
  ...rest
}: Props) => {
  let timerId: ReturnType<typeof setTimeout>;
  const inputRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  //화면크기가 변경될때 Item의 크기를 변경시켜주기
  useEffect(() => {
    if (inputRef.current?.offsetWidth) {
      setWidth(inputRef.current?.offsetWidth);
    }

    window.addEventListener("resize", () => {
      if (inputRef.current?.offsetWidth) {
        setWidth(inputRef.current?.offsetWidth);
      }
    });

    return () =>
      window.removeEventListener("resize", () => {
        if (inputRef.current?.offsetWidth) {
          setWidth(inputRef.current?.offsetWidth);
        }
      });
  }, []);

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const [completeList, setCompleteList] = useState<Array<any>>([]);
  const [value, onChangeValue, setValue] = useInput<string>("", (e) => {
    let viewItems: Array<any> = [];

    if (e.target.value.length > 0) {
      //쓰여진 글자가 있으면
      //정규식으로 filtering
      try {
        const regexp = new RegExp(`^${e.target.value}`, "i");
        //filtering된 아이템만 보여주기
        viewItems = items.filter((item) => regexp.test(item)).sort();
      } catch (error) {
        viewItems = [];
      }
    }

    setCompleteList(viewItems);

    return e.target.value;
  });

  const onClickComplete = (value: any) => {
    setValue(value);
    setCompleteList([]);
  };

  //focus를 벗어날 때 아이템 안보이게 하기
  const onBlur = () => {
    timerId = setTimeout(() => {
      setIsFocus(false);
    }, 100);
  };

  useEffect(() => {
    return clearTimeout(timerId);
  }, []);

  return (
    <AutoCompleteSt.Wrapper ref={inputRef}>
      <Input
        id={id}
        label={label}
        warning={warning}
        warningMessage={warningMessage}
        value={value}
        onChange={onChangeValue}
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        {...rest}
      />
      {completeList.length > 0 && isFocus && (
        <AutoCompleteSt.ItemWrapper width={width}>
          {completeList.map((item) => {
            return (
              <AutoCompleteSt.Item
                key={item}
                onClick={() => onClickComplete(item)}
              >
                {item}
              </AutoCompleteSt.Item>
            );
          })}
        </AutoCompleteSt.ItemWrapper>
      )}
    </AutoCompleteSt.Wrapper>
  );
};

export default AutoComplete;
