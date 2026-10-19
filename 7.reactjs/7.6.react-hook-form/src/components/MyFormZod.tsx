import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mySchema } from "../schema/my-form.schema";
type MyFormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  startDate: string;
  endDate: string;
  age: string;
};

export default function MyFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>({
    mode: "onSubmit",
    resolver: zodResolver(mySchema),
  });
  const onSubmit = async (data: MyFormData) => {
    const age = Number(data.age);
    const dataBody = {
      ...data,
      age,
    };
    console.log(dataBody);

    //Logic
    console.log("Đang xử lý");
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("Response");
      }, 2000),
    );
    console.log("Done");
  };

  return (
    <div className="mx-auto py-5 max-w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            placeholder="Name..."
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Email
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            placeholder="Email..."
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Password
          </label>
          <input
            type="password"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Phone
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            placeholder="Phone"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Birthday
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            {...register("birthday")}
          />
          {errors.birthday && (
            <span className="text-red-600">{errors.birthday.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Start Date
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            {...register("startDate")}
          />
          {errors.startDate && (
            <span className="text-red-600">{errors.startDate.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            End Date
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            {...register("endDate")}
          />
          {errors.endDate && (
            <span className="text-red-600">{errors.endDate.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Age
          </label>
          <input
            type="number"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            {...register("age")}
          />
          {errors.age && (
            <span className="text-red-600">{errors.age.message}</span>
          )}
        </div>

        <button className="bg-green-600 disabled:opacity-50 px-3 py-1 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
