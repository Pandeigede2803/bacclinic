import React from "react";

function Form() {
  const googleForm =
    "https://docs.google.com/forms/d/1ot0b0TMrdiBKmPbmn-Bd80GlNLnW9fqrft7nupPCwME/viewform?hl=id&pli=1&hl=id&pli=1&edit_requested=true";
  
  
    return (
    <div>
      <iframe
        src={googleForm}
        width="640"
        height="685"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Form;
