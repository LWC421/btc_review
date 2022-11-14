import { useEffect, useState } from "react";

const useFormData = () => {
  const [formData, setFormdata] = useState<FormData | null>(null);

  useEffect(() => {
    if (typeof window === "object") {
      setFormdata(new FormData());
    }
  }, []);

  return formData;
};

export default useFormData;
