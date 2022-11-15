import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./Button";
import * as ImageUploadSt from "./ImageUpload.style";

type Props = {
  formData: FormData | null;
};

const ImageUpload = ({ formData }: Props) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string>("");

  const onClickUpload = () => {
    imageRef.current?.click();
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) {
      //formData가 null이면 리턴
      return;
    }
    e.preventDefault();

    const file = e.target.files?.[0];
    if (!file) {
      //file이 없으면 return
      return;
    }

    if (formData.has("image")) {
      //기존 image가 있으면 삭제
      formData.delete("image");
      URL.revokeObjectURL(preview);
      setPreview("");
    }
    //formData에 append
    formData.append("image", file);

    const previewPath = URL.createObjectURL(file);
    setPreview(previewPath);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        style={{ display: "none" }}
        onChange={(e) => onChangeImage(e)}
      />
      <ImageUploadSt.PreviewWrapper>
        {preview ? (
          <Image
            src={preview}
            alt="미리보기"
            layout="fill"
            className="preview"
          />
        ) : (
          <Image
            src="/noImage.png"
            alt="미리보기"
            layout="fill"
            className="preview"
          />
        )}
      </ImageUploadSt.PreviewWrapper>
      <Button type="button" onClick={onClickUpload}>
        이미지 업로드
      </Button>
    </div>
  );
};

export default ImageUpload;
