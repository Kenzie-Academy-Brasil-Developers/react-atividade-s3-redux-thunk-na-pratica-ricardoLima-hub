import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

export default function Display() {

    const dispatch = useDispatch();

    const [comment, setComment] = useState("");

    const { comments } = useSelector((state) => state.user)

    const handleClick = () => {
        dispatch(addCommentThunk(comment))
        setComment("")
    }

    return (
        <div>
            <ul>
                {comments.map((item, index) => (
                        <li key={index} style={{ listStyle: "none"}}>{item}</li>     
                ))}
            </ul>
            <div>
                <input
                    placeholder="Comments..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleClick}>New comment</button>
            </div>
        </div>
    )
}
