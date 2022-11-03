import { ChangeEvent, useCallback, useState } from "react";

/**
 * onChange함수에 사용될 handler를 생성하기 위한 함수
 * @param {T} initialValue 초기값
 * @param {(e: ChangeEvent<HTMLInputElement>) => T} callback 타입{T}를 반환하는 onChange함수, 생략시 e.target.value를 return
 * @param {T} initialValid 초기valid값
 * @param {(value: T) => boolean} validation 타입{T}를 입력으로 하여 boolean값을 반환하는 validation 함수
 * @returns {[<T>, (ChangeEvent<HTMLInputElement>) => void, (<T>) => void, boolean, (boolean) => void]} [value, onChange, setValue, isValid, setIsValid]
 */
const useInput = <T>(
  initialValue: T,
  callback?: ((e: ChangeEvent<HTMLInputElement>) => T) | null,
  initialValid?: boolean,
  validation?: (value: T) => boolean
): [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (value: T) => void,
  boolean | null,
  ((value: boolean) => void) | null
] => {
  const [value, setValue] = useState<T>(initialValue);

  const [isValid, setIsValid] = useState<boolean>(
    initialValid ? initialValid : false
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const targetValue = callback
        ? callback(e)
        : (e.target.value as unknown as T);
      setValue(targetValue);
      //사용자 정의 함수 callback으로부터 값을 반환 받아 set

      if (validation !== undefined) {
        //validation함수가 주어지면 validation을 진행
        const validResult = validation(targetValue);
        setIsValid(validResult);
      }
    },

    [callback, validation]
  );

  return [
    value,
    onChange,
    setValue,
    validation ? isValid : null,
    validation ? setIsValid : null,
  ];
};

export default useInput;
