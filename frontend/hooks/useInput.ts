import { useCallback, useState } from "react";

/**
 * onChange함수에 사용될 handler를 생성하기 위한 함수
 * @param {T} initialValue 초기값
 * @param {(e: any) => T} callback 타입<T>를 반환하는 onChange함수
 * @returns {[<T>, (any) => void, (<T>) => void]} [value, onChange, setValue]
 */
const useInput = <T>(
  initialValue: T,
  callback?: (e: any) => T
): [T, (e: any) => void, (value: T) => void] => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: any) => {
    const targetValue = callback
      ? callback(e)
      : (e.target.value as unknown as T);
    setValue(targetValue);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
