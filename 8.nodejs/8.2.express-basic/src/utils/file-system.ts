import fs from "fs/promises";
export const pathExisting = async (path: string) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}