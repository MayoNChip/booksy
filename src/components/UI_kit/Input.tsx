import { Input } from "@chakra-ui/react";

type InputProps = {
  w?: string | string[];
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string;
};

export default function MyInput({
  w,
  placeholder,
  onChange,
  id,
  name,
  value,
}: InputProps) {
  return (
    <Input
      id={id}
      name={name}
      w={w || "250px"}
      borderColor="orange.700"
      _active={{ borderColor: "orange.400" }}
      _focus={{ borderColor: "orange.400", shadow: "none" }}
      placeholder={placeholder}
      textAlign="right"
      onChange={onChange}
      value={value}
    ></Input>
  );
}
