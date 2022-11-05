import React, { ChangeEvent, useEffect } from "react";
import { useState, useRef } from "react";
import * as AutoCompleteSt from "./AutoComplete.style";
import Input, { Props as InputProps } from "./Input";

interface Props extends InputProps {
  items: Array<any>;
  value: any;
  setValue: (value: any) => void;
}

//참고 사이트
//https://velog.io/@hyejeong/Auto-CompleteReact-b7j9vwif
const AutoComplete = ({
  id,
  label,
  warning,
  warningMessage,
  value,
  setValue,
  items,
  ...rest
}: Props) => {
  let timerId: ReturnType<typeof setTimeout>;
  const inputRef = useRef<HTMLDivElement>(null);
  const [highlightExp, setHighlightExp] = useState<RegExp>(new RegExp(""));

  const [width, setWidth] = useState<number>(0);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [completeList, setCompleteList] = useState<Array<any>>(items);

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

  const onClickComplete = (value: any) => {
    setValue(value);
    setCompleteList([]);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let viewItems: Array<any> = [];

    if (value.length > 0) {
      const specialExp = new RegExp(
        /[\{\}\[\]\/?.,;:|*~`!^\-_+<>@\#$%&\\\=\'\"]/
      );
      if (specialExp.test(value)) {
        value = value.replace(specialExp, "");
      }
    }

    setValue(value);

    //정규식으로 filtering
    try {
      const expString = value.replaceAll("(", `\\(`).replaceAll(")", `\\)`);
      const regexp = new RegExp(`^.*${expString}.*`, "i");
      setHighlightExp(new RegExp(`(${expString})`, "gi"));
      //filtering된 아이템만 보여주기
      viewItems = items.filter((item) => regexp.test(item));
    } catch (error) {
      viewItems = [];
    }
    setCompleteList(viewItems);
  };

  //focus를 벗어날 때 아이템 안보이게 하기
  const onBlur = () => {
    timerId = setTimeout(() => {
      setIsFocus(false);
    }, 150);
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
        onChange={onChangeInput}
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        {...rest}
      />
      {completeList.length > 0 && isFocus && (
        <AutoCompleteSt.ItemWrapper width={width}>
          {completeList.map((item: string) => {
            return (
              <AutoCompleteSt.Item
                key={item}
                onClick={() => onClickComplete(item)}
              >
                {item.split(highlightExp).map((text, index) => {
                  const render =
                    text === value ? (
                      <AutoCompleteSt.Highlight key={text + index}>
                        {text}
                      </AutoCompleteSt.Highlight>
                    ) : (
                      text
                    );
                  return render;
                })}
              </AutoCompleteSt.Item>
            );
          })}
        </AutoCompleteSt.ItemWrapper>
      )}
    </AutoCompleteSt.Wrapper>
  );
};

export default AutoComplete;
