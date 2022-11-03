import { AutoComplete, Input } from "components/common";
import { useInput } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import * as CafeSt from "pageStyles/post/cafe.style";
import { useState } from "react";

const dummyDistrict = [
  "대구",
  "홍대",
  "홍대입구",
  "서울톨게이트",
  "서울",
  "서울시청",
  "대구시청",
  "동성로",
  "동성로 입구",
  "동생로 입구",
  "동생로",
  "대구대",
  "대구대학교",
  "대구대학교 입구",
  "대구대학교 정문",
  "동성로(2호점)",
];

const Cafe: NextPage = () => {
  const router = useRouter();

  const [name, onChangeName, _, isValidName] = useInput<string>(
    "",
    null,
    false,
    (value) => {
      if (value.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  );
  const [description, onChangeDescription] = useInput<string>("");

  const [district, setDistrict] = useState<string>("");

  return (
    <CafeSt.Wrapper>
      <CafeSt.Form>
        {/*name, location, description, image, districts*/}

        <Input
          id="name"
          placeholder="카페명"
          label="카페명"
          type="text"
          maxLength={20}
          required={true}
          value={name}
          onChange={onChangeName}
          warning={!isValidName}
          warningMessage="카페명은 1글자 이상이어야합니다"
        />

        <Input
          id="description"
          placeholder="카페에 대한 설명"
          label="설명"
          type="text"
          maxLength={240}
          required={false}
          value={description}
          onChange={onChangeDescription}
        />

        <AutoComplete
          id="district"
          placeholder="홍대"
          label="지역"
          type="text"
          maxLength={20}
          required={true}
          items={dummyDistrict}
          value={district}
          setValue={setDistrict}
        />
      </CafeSt.Form>
    </CafeSt.Wrapper>
  );
};

export default Cafe;
