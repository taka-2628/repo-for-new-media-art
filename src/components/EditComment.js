import React, { useState } from "react";

function EditComment( { body }){
  const [commentBody, setCommentBody] = useState(body);

  return (
    <form className="edit-message">
      <textarea
        type="text"
        name="body"
        autoComplete="off"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditComment;