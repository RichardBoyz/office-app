import { createChoresRoom } from "@/apis/chores";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateChoresInput } from "../../interfaces/chores";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const CreateChoresRoom = () => {
  const { toast } = useToast();

  const [enabledButton, setEnabledButton] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<CreateChoresInput>();

  const onSubmit: SubmitHandler<CreateChoresInput> = async (
    data: CreateChoresInput
  ) => {
    try {
      const { name, description } = data;
      await createChoresRoom(name, description);
      toast({
        title: "建立成功",
        description: "Nice",
        duration: 1000,
      });
      reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "建立失敗",
        description: "Something went wrong",
        duration: 1000,
      });
    }
  };

  return (
    <div className="p-2 h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <p className="text-sm">Room name</p>
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

        <p className="text-sm pt-2">Description</p>
        <Input
          className="mt-1"
          placeholder="description..."
          {...register("description", {
            required: false,
            maxLength: {
              value: 10,
              message: "Cut the cxxp :|",
            },
          })}
        />
        <p className="text-red-400">{errors.description?.message}</p>
        <Button
          disabled={!isDirty || !isValid || isSubmitting}
          className="mt-2"
        >
          OK
        </Button>
      </form>
    </div>
  );
};

export default CreateChoresRoom;
