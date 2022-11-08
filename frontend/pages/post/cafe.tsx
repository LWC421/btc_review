import { AutoComplete, Button, Input, TextArea } from "components/common";
import { useInput } from "hooks";
import { useAlert } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import * as CafeSt from "pageStyles/post/cafe.style";
import React, { useState } from "react";

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
  const districtItems = dummyDistrict;

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
  const [description, setDescription] = useState<string>("");
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const [district, setDistrict] = useState<string>("");
  const [districtList, setDistrictList] = useState<Array<string>>([]);

  //지역 추가 버튼을 누를때 불릴 event
  const onClickDicstrict = () => {
    //존재하는 지역에 대해서만 추가할 수 있게 만듦
    if (districtItems.includes(district)) {
      setDistrictList([...districtList, district]);
      setDistrict("");
    } else {
      useAlert({ type: "error", message: "존재하지 않는 지역입니다" });
    }
  };

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

        <TextArea
          id="description"
          placeholder="카페에 대한 설명"
          label="설명"
          maxlength={240}
          value={description}
          onChange={onChangeDescription}
          rows={10}
        />
        <CafeSt.Row>
          <CafeSt.Left>
            <AutoComplete
              id="district"
              placeholder="홍대"
              label="지역"
              type="text"
              maxLength={20}
              required={true}
              items={districtItems}
              value={district}
              setValue={setDistrict}
              empty={"표시할 항목이없습니다"}
            />
          </CafeSt.Left>
          <CafeSt.Right>
            <Button primary type="button" onClick={onClickDicstrict}>
              추가
            </Button>
          </CafeSt.Right>
        </CafeSt.Row>
        {districtList}
      </CafeSt.Form>
    </CafeSt.Wrapper>
  );
};

export default Cafe;
