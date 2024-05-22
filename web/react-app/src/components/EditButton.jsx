import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProviders";

const style = {
    width: "100px",
    padding: "6px",
    borderRedius: "8px"
};

export const EditButton = props => {
    const { isAdmin } = useContext(AdminFlagContext);
    
    // isAdminがfalse（管理者でない）時にボタンを非活性化する
    return (
        <button style={style} disabled={!isAdmin}>
            編集
        </button>
    );
};
