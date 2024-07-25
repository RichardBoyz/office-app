import { SubmitHandler, useForm } from "react-hook-form";
import { CreateChoresInput } from "../../interfaces/chores";
const CreateChoresRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChoresInput>();

  const onSubmit: SubmitHandler<CreateChoresInput> = (data) =>
    console.log(data);

  return (
    <div className="overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-sm">房間名稱</p>
        <input
          className="mt-1"
          {...register("name", {
            required: "Please type something :)",
            minLength: {
              value: 2,
              message: "Please enter at least two words",
            },
          })}
          placeholder="name ..."
        />
        <p className="text-red-400">{errors.name?.message}</p>

        <p className="text-sm">描述</p>
        <input
          className="mt-1"
          {...register("description", {
            required: false,
            maxLength: {
              value: 10,
              message: "Cut the cxxp :|",
            },
          })}
        />
        <button className="mt-2">OK</button>
      </form>
    </div>
  );
};

export default CreateChoresRoom;
