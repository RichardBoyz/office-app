import { SubmitHandler, useForm } from "react-hook-form";
import { CreateChoresInput } from "../../interfaces/chores";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const CreateChoresRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChoresInput>();

  const onSubmit: SubmitHandler<CreateChoresInput> = (data) =>
    console.log(data);

  return (
    <div className="p-2 h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <p className="text-sm">房間名稱</p>
        <Input
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
        <Input
          className="mt-1"
          {...register("description", {
            required: false,
            maxLength: {
              value: 10,
              message: "Cut the cxxp :|",
            },
          })}
        />
        <Button className="mt-2">OK</Button>
      </form>
    </div>
  );
};

export default CreateChoresRoom;
