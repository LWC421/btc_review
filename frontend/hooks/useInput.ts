import { useCallback, useState } from "react";

/**
 *
 * @param {T} initialValue 초기값
 * @param {(e: any) => T} callback
 * @returns
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
