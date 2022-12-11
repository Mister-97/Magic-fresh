import React from "react";
import { Img, NoServices } from "./Regular";
import Service from "./Service";

const Move = () => {
  return (
    <div>
      <Service>
        <Img>
          <img src="/services/2-1.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
        <ul>
          <h2>Bedroom, Living Room & Common Areas</h2>
          <li>Remove cobwebs</li>
          <li>Clean and dust lighting fixtures</li>
          <li>Clean and dust ceiling fans (height restrictions apply)</li>
          <li>Clean all mirrors and glass fixtures</li>
          <li>Wipe down windowsills</li>
          <li>Wipe down door/frames/switch plates, fingerprint removal</li>
          <li>Wipe down baseboards</li>
          <li>Dust blinds (dry cleaning)</li>
          <li>Vacuum and/or mop floors</li>
          <li>Vacuum carpet</li>
          <br />
          <strong>​​​​​​​ Regular cleaning Do NOT include:</strong>
          wipe down baseboard/doors, cabinets inside, windows
        </ul>
      </Service>

      <Service>
        <ul>
          <h2>Kitchen</h2>
          <li>Remove cobwebs</li>
          <li>Clean and dust lighting fixtures</li>
          <li>Clean and dust ceiling fans (height restrictions apply)</li>
          <li>Wipe down windowsills</li>
          <li>Wipe down cabinets (exterior)</li>
          <li>Wipe down countertops and backsplash</li>
          <li>Clean kitchen sink</li>
          <li>Clean/polish chrome items</li>
          <li>Clean microwave (inside/outside)</li>
          <li>Clean appliances exterior</li>
          <li>Wipe down door/frames/switch plates, fingerprint removal</li>
          <li>Wipe down baseboards</li>
          <li>Vacuum and/or mop floors</li>
          <li>Take out the garbage</li>
          <br />
          <strong>​​​​​​​ Regular cleaning Do NOT include:</strong>
          wipe down baseboard/doors, cabinets inside, windows
        </ul>
        <Img>
          <img src="/services/2-2.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
      </Service>

      <Service>
        <Img>
          <img src="/services/2-3.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
        <ul>
          <h2>Bathroom</h2>
          <li>Remove cobwebs</li>
          <li>Clean and dust lighting fixtures</li>
          <li>Clean all mirrors and glass fixtures</li>
          <li>Clean and disinfect tub, shower, sink and toilet</li>
          <li>Wipe down countertops</li>
          <li>Clean/polish chrome items</li>
          <li>Wipe down cabinets (exterior)</li>
          <li>Wipe down windowsills</li>
          <li>Wipe down door/frames/switch plates, fingerprint removal</li>
          <li>Wipe down baseboards</li>
          <li>Mop floors</li>
          <br />
          <strong>​​​​​​​ Regular cleaning Do NOT include:</strong>
          wipe down baseboard/doors, cabinets inside, windows
        </ul>
      </Service>
      <NoServices>
        <h2>Service Not Offered</h2>
        <ul>
          <li>❌ Cleaning of Chandeliers</li>
          <li>❌ Wet Wiping of Light Bulbs</li>
          <li>❌ Cleaning of Bio-hazards (Mold, etc)</li>
          <li>❌ Moving furniture or any object heavier than 20 lb.</li>
          <li>❌ Hoarding, Animal -Waste/Litter/Insects</li>
          <li>❌ Scrubbing of Walls</li>
          <li>❌ Steam Carpet of any Carpet Cleaning</li>
          <li>❌ High To Reach Areas (More than a 2 step ladder)</li>
          <li>❌ Washing of Exterior Windows</li>
        </ul>
      </NoServices>
    </div>
  );
};

export default Move;
