import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user, lodding} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isIstructor, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isIstructor', user?.email],
        enabled: !lodding,
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.admin;
            
        }
    })
    return [isIstructor, isAdminLoading]
}
export default useInstructor;