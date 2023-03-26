import React from "react";
import styled from "styled-components";
import Service from "./Service";

const Regular = () => {
  return (
    <div>
      <Service>
        <Img>
          <img src="/services/1-1.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
        <ul>
          <h2>Bedroom, Living Room & Common Areas</h2>
          <li>Remove cobwebs</li>
          <li>Clean and dust lighting fixtures</li>
          <li>Clean and dust ceiling fans (height restrictions apply)</li>
          <li>Clean all mirrors and glass fixtures</li>
          <li>Clean windowsills</li>
          <li>Dust blinds (dry cleaning)</li>
          <li>Dust all furniture</li>
          <li>Dust door/frames/switch plates fingerprint removal</li>
          <li>Dust picture frames</li>
          <li>Make all beds (linens changed upon request)</li>
          <li>Tidy up rooms</li>
          <li>Empty trash cans</li>
          <li>Dust baseboards (wet cleaning upon request) or *wipe down</li>
          <li>Vacuum under the beds (if accessible)</li>
          <li>Vacuum and/or mop floors ​​​​​​​</li>
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
          <li>Clean windowsills</li>
          <li>Clean cabinets (exterior)</li>
          <li>Clean kitchen table and chairs</li>
          <li>Clean countertops and backsplash</li>
          <li>Clean kitchen sink and load dishwasher</li>
          <li>Clean/polish chrome items</li>
          <li>Clean microwave (exterior/interior)</li>
          <li>Clean appliances exterior (interiors upon request)</li>
          <li>Dust door/frames/switch plates, fingerprint removal</li>
          <li>Empty trash/recycle cans</li>
          <li>Dust baseboards (wet cleaning upon request) or * wipe down</li>
          <li>Vacuum and/or mop floors</li>
          <br />
          <strong>​​​​​​​ Regular cleaning Do NOT include:</strong>
          wipe down baseboard/doors, cabinets inside, windows
        </ul>
        <Img>
          <img src="/services/kitchen.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
      </Service>

      <Service>
        <Img>
          <img src="/services/1-3.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
        <ul>
          <h2>Bathroom</h2>
          <li>Remove cobwebs</li>
          <li>Clean and dust lighting fixtures</li>
          <li>Clean all mirrors and glass fixtures</li>
          <li>Clean and disinfect tub, shower, sink and toilet</li>
          <li>Clean countertops</li>
          <li>Clean/polish chrome items</li>
          <li>Clean exterior of cabinets</li>
          <li>Clean windowsills</li>
          <li>Fold towels</li>
          <li>Dust door/frames/switch plates fingerprint removal</li>
          <li>Empty trash cans</li>
          <li>Dust baseboards (wet cleaning upon request) or *wipe down</li>
          <li>Mop floors</li>
          <br />
          <strong>​​​​​​​ Regular cleaning Do NOT include:</strong>
          wipe down baseboard/doors, cabinets inside, windows
        </ul>
      </Service>

      <Service>
        <ul>
          <h2>Extras(Upon Request)</h2>
          <li>Inside fridge​​​​​​​</li>
          <li>Inside oven​​​​​​​</li>
          <li>Inside cabinets</li>
          <li>Windows(in) and sliding doors(in/out)</li>
          <li>Hand washing dishes</li>
          <li>Laundry wash/fold</li>
          <li>Wipe down blinds</li>
          <li>Wipe down baseboard</li>
          <br />
        </ul>
        <Img>
          <img src="/services/1-4.png" alt="" />
          <br />
          <a href="">Book Service</a>
        </Img>
      </Service>
      <NoServices>
        <h2>Services Not Offered</h2>
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

export default Regular;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoServices = styled.div`
  margin-left: 15vw;
  @media (max-width: 900px) {
    margin-left: 5vw;
  }
  ul {
    list-style: none;
  }
`;
