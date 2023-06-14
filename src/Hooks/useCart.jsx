import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useEnrolledCourse = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: MyCourses = [] } = useQuery({
        queryKey: ['myCourse', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
            return res.json();
        },
    })
    return [MyCourses, refetch]

};

export default useEnrolledCourse;