const Input = ({ placeholder, setData, input }: any) => {
  const Input = input;

  return (
    <div>
      <Input
        type="text"
        className="outline-none border rounded-md p-2 w-full"
        placeholder={placeholder}
        onChange={(e: any) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
