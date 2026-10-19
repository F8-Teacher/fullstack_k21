import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
type MyFormData = {
  name: string;
  email: string;
  password: string;
};
const getUser = async (): Promise<{ name: string; email: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "An",
        email: "demo@gmail.com",
      });
    }, 2000);
  });
};
export default function MyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<MyFormData>({
    mode: "onChange",
  });
  const [isLoading, setLoading] = useState(true);
  const onSubmit = async (data: MyFormData) => {
    console.log(data);
    //Logic
    console.log("Đang xử lý");
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("Response");
      }, 2000),
    );
    console.log("Done");
  };
  useEffect(() => {
    const initForm = async () => {
      try {
        const user = await getUser();
        setValue("name", user.name);
        setValue("email", user.email);
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };
    initForm();
  }, []);
  return (
    <div className="mx-auto py-5 max-w-1/2">
      <p className="text-green-600">{isLoading && "Init Data..."}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ddd] outline-none w-full"
            placeholder="Name..."
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
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
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
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
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        {/* <div className="mb-3">
          <label htmlFor="" className="block font-semibold">
            Gender
          </label>
          <div className="flex gap-3">
            <label>
              <input type="radio" value={"male"} {...register("gender")} /> Male
            </label>
            <label>
              <input type="radio" value={"female"} {...register("gender")} />{" "}
              Female
            </label>
          </div>
        </div> */}

        {/* <div className="mb-3">
          <label className="block font-semibold">
            <input
              type="checkbox"
              {...register("rememberMe")}
              value={"value-1"}
            />
            Remember
          </label>
          <label className="block font-semibold">
            <input
              type="checkbox"
              {...register("rememberMe")}
              value={"value-2"}
            />
            Remember
          </label>
        </div> */}
        <button
          className="bg-green-600 disabled:opacity-50 px-3 py-1 text-white"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}
