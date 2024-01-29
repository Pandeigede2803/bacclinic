import React from "react";

const Location = () => {
  return (
    <div className=" flex flex-col  w-full mt-3 font-primary">
      <h1 className="text-xl text-left font-bold mb-2">Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.112640687048!2d115.21766181533128!3d-8.714944393737366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2412572a80349%3A0x9dee8d434b8cf059!2sJl.%20Bypass%20Ngurah%20Rai%20No.225x%2C%20Sesetan%2C%20Kec.%20Denpasar%20Sel.%2C%20Kota%20Denpasar%2C%20Bali%2080223%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1648378958889!5m2!1sen!2sid"
        className="w-full h-[200px] rounded-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
