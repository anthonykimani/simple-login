import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (data: { name: string; password: string }) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-screen h-screen"
      >
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="name"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="password"
        />
        <button className="border bg-slate-800 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
