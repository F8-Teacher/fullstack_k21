import z from "zod";
const emailBlacklist = [
    'admin@gmail.com',
    'chinhphu@gmail.com'
]
export const mySchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").pipe(z.email('Email invalid')).refine((value: string) => {
        return !emailBlacklist.includes(value);
    }, 'Email is blacklist'),
    password: z.string().min(6, "Password min 6 character"),
    phone: z.string().nonempty("Phone is required").regex(/^0\d{9}$/, "Phone invalid"),
    birthday: z.iso.date("Birthday invalid"),
    startDate: z.iso.date("Start Date invalid"),
    endDate: z.iso.date("End Date invalid"),
    age: z.string()
}).refine(({ startDate, endDate }) => {
    const timeStart = new Date(startDate).getTime(); //timestamp (mili giây)
    const timeEnd = new Date(endDate).getTime(); // timestamp (mili giây)
    if (timeStart > timeEnd) {
        return false;
    }
    return true;
}, {
    message: "End Date phải sau Start Date",
    path: ["endDate"]
});

//z.number().min(5)
//pipe (Gọi ở bất kỳ kiểu dữ liệu nào)

//Target: 2026-10-19 20:00:00