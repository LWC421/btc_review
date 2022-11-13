import * as TagSt from "./Tag.style";

type Props = {
  value: Array<any>;
  setValue: (value: any) => void;
};

const Tag = ({ value, setValue }: Props) => {
  const onDelete = (targetIndex: any) => {
    setValue([
      ...value.filter((_: any, index: number) => index !== targetIndex),
    ]);
  };

  return (
    <TagSt.Wrapper>
      {value.length === 0 && "표시할 항목이 없습니다"}
      {value.length !== 0 &&
        value.map((item: any, index) => {
          return (
            <TagSt.TagItem key={`${item}-${index}`}>
              {item}
              <TagSt.Close onClick={() => onDelete(index)} />
            </TagSt.TagItem>
          );
        })}
    </TagSt.Wrapper>
  );
};

export default Tag;
