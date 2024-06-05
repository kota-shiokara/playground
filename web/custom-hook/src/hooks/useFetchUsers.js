import { useState } from "react";
import axios from "axios";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUsers = async () => {
        setIsLoading(true);
        setIsError(false);

        axios
            .get("http://localhost:3001/users")
            .then((response) => {
                const users = response.data.map((user) => ({
                    id: user.id,
                    name: `${user.lastname} ${user.firstname}`,
                    age: user.age,
                }));
                setUserList(users);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return {
        userList,
        isLoading,
        isError,
        onClickFetchUsers,
    };
}